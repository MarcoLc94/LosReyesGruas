import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import "./Welcome.css";

const backgroundImages = [
  "/wallpaper1.png",
  "/wallpaper2.png",
  "/wallpaper3.png",
];

// Precarga de imágenes
const preloadImages = (urls: string[]): Promise<HTMLImageElement[]> => {
  return Promise.all(
    urls.map((url) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    })
  );
};

const Welcome = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const darkOverlayMeshRef = useRef<THREE.Mesh | null>(null);
  const currentImageIndex = useRef(0);
  const isTransitioning = useRef(false);
  const texturesRef = useRef<THREE.Texture[]>([]);

  // Vertex shader
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Fragment shader con efecto de desplazamiento
  const fragmentShader = `
    varying vec2 vUv;
    uniform sampler2D currentImage;
    uniform sampler2D nextImage;
    uniform float dispFactor;

    void main() {
      vec2 uv = vUv;
      vec4 _currentImage;
      vec4 _nextImage;
      float intensity = 0.3;

      vec4 orig1 = texture2D(currentImage, uv);
      vec4 orig2 = texture2D(nextImage, uv);
      
      _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2.r * intensity)));
      _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1.r * intensity)));

      vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
      
      // Aplicar oscurecimiento directamente en el shader
      vec3 darkenedColor = finalTexture.rgb * 0.6; // Reducir brillo al 60%
      gl_FragColor = vec4(darkenedColor, finalTexture.a);
    }
  `;

  // Función de transición con useCallback para evitar dependencias
  const transitionToNextImage = useCallback(() => {
    if (isTransitioning.current || !materialRef.current) return;

    isTransitioning.current = true;
    const nextIndex = (currentImageIndex.current + 1) % backgroundImages.length;

    // Actualizar uniformes
    materialRef.current.uniforms.nextImage.value =
      texturesRef.current[nextIndex];

    // Animación de transición
    gsap.to(materialRef.current.uniforms.dispFactor, {
      value: 1,
      duration: 1.5,
      ease: "expo.inOut",
      onComplete: () => {
        if (materialRef.current) {
          // Actualizar imagen actual
          materialRef.current.uniforms.currentImage.value =
            texturesRef.current[nextIndex];
          materialRef.current.uniforms.dispFactor.value = 0.0;

          currentImageIndex.current = nextIndex;
          isTransitioning.current = false;
        }
      },
    });
  }, []);

  useEffect(() => {
    const initThreeJS = async () => {
      if (!canvasRef.current) return;

      // Precargar imágenes
      await preloadImages(backgroundImages);

      // Configurar escena
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Configurar cámara ortográfica
      const aspectRatio = window.innerWidth / window.innerHeight;
      const viewportHeight = 10;
      const viewportWidth = viewportHeight * aspectRatio;

      const camera = new THREE.OrthographicCamera(
        viewportWidth / -2,
        viewportWidth / 2,
        viewportHeight / 2,
        viewportHeight / -2,
        0.1,
        1000
      );
      camera.position.z = 5;
      cameraRef.current = camera;

      // Configurar renderizador
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;

      // Cargar texturas
      const textureLoader = new THREE.TextureLoader();
      const textures = backgroundImages.map((src) => {
        const texture = textureLoader.load(src);
        texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        return texture;
      });
      texturesRef.current = textures;

      // Crear material con shader personalizado
      const material = new THREE.ShaderMaterial({
        uniforms: {
          dispFactor: { value: 0.0 },
          currentImage: { value: textures[0] },
          nextImage: { value: textures[1] },
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true,
      });
      materialRef.current = material;

      // Crear geometría y malla para la imagen
      const geometry = new THREE.PlaneGeometry(viewportWidth, viewportHeight);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      meshRef.current = mesh;

      // Crear capa oscura semi-transparente
      const overlayGeometry = new THREE.PlaneGeometry(
        viewportWidth,
        viewportHeight
      );
      const overlayMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        opacity: 0.4, // 40% de opacidad para el layer oscuro
        transparent: true,
      });
      const darkOverlayMesh = new THREE.Mesh(overlayGeometry, overlayMaterial);
      darkOverlayMesh.position.z = 0.1; // Colocar ligeramente por delante de la imagen
      scene.add(darkOverlayMesh);
      darkOverlayMeshRef.current = darkOverlayMesh;

      // Animación
      const animate = () => {
        requestAnimationFrame(animate);
        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      };
      animate();

      // Manejar redimensionado
      const handleResize = () => {
        if (
          !cameraRef.current ||
          !rendererRef.current ||
          !meshRef.current ||
          !darkOverlayMeshRef.current
        )
          return;

        const aspectRatio = window.innerWidth / window.innerHeight;
        const viewportHeight = 10;
        const viewportWidth = viewportHeight * aspectRatio;

        cameraRef.current.left = -viewportWidth / 2;
        cameraRef.current.right = viewportWidth / 2;
        cameraRef.current.top = viewportHeight / 2;
        cameraRef.current.bottom = -viewportHeight / 2;
        cameraRef.current.updateProjectionMatrix();

        rendererRef.current.setSize(window.innerWidth, window.innerHeight);

        // Actualizar geometría de la imagen y del overlay
        meshRef.current.scale.set(viewportWidth / 10, viewportHeight / 10, 1);
        darkOverlayMeshRef.current.scale.set(
          viewportWidth / 10,
          viewportHeight / 10,
          1
        );
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };

    initThreeJS();

    // Cambiar imagen cada 4 segundos
    const intervalId = setInterval(() => {
      if (!isTransitioning.current) {
        transitionToNextImage();
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [vertexShader, fragmentShader, transitionToNextImage]);

  return (
    <div className="welcome-container">
      <canvas ref={canvasRef} className="background-canvas" />
      <div className="content">
        <div>
          <img src="/logo2.png" alt="logo" className="logo" />
        </div>
        <h1 className="home-title">
          Soluciones en <span className="highlight">grúas</span>,{" "}
          <span className="highlight">montacargas</span> y{" "}
          <span className="highlight">maniobras industriales</span>
        </h1>
        <div className="belt-container">
          <div className="belt-inner">
            {Array.from({ length: 25 }).map((_, index) => (
              <div
                key={index}
                className={`belt-stripe ${
                  index % 2 === 0 ? "yellow" : "black"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
