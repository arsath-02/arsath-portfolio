import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
  const [sizeFactor, setSizeFactor] = useState(0);

  useFrame((state, delta) => {
    // Rotate the stars
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    // Adjust size for twinkling effect
    setSizeFactor(Math.sin(state.clock.elapsedTime * 2) * 0.002 + 0.003);

    // Adjust color for a pulsing effect
    ref.current.material.color.setHSL(
      (0.6 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2) % 1, 
      1, 
      0.7
    );
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={sizeFactor}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
