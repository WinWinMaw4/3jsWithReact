import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const Experience = () => {
  const objectRef = useRef(null);

  useFrame(() => {
    if (objectRef.current) {
      objectRef.current.rotation.y += 0.01; // Slow rotation
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh ref={objectRef} castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
};

export default Experience;
