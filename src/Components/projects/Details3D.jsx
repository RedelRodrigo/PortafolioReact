import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";

function TechTags({ technologies = [] }) {
  const visibleTech = technologies.slice(0, 6);

  return visibleTech.map((tech, index) => {
    const angle = (index / Math.max(visibleTech.length, 1)) * Math.PI * 2;
    const radius = 2.3;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * 0.9;
    const z = Math.sin(angle) * 0.5;

    return (
      <Float
        key={`${tech}-${index}`}
        speed={1.2}
        floatIntensity={0.5}
        rotationIntensity={0.3}
      >
        <Text
          position={[x, y, z]}
          fontSize={0.2}
          maxWidth={1.5}
          color="#f8d65f"
          anchorX="center"
          anchorY="middle"
        >
          {tech}
        </Text>
      </Float>
    );
  });
}

function Planet() {
  const ringRef = useRef(null);

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.45;
    }
  });

  return (
    <Float speed={5} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh>
        <sphereGeometry args={[1.15, 96, 96]} />
        <meshStandardMaterial
          color="rgb(255, 120, 0)"
          metalness={0.15}
          roughness={0.65}
          emissive="rgb(255, 56, 0)"
          emissiveIntensity={0.45}
        />
      </mesh>

      <mesh scale={1.01}>
        <sphereGeometry args={[1.15, 48, 48]} />
        <meshStandardMaterial
          color="red"
          transparent
          opacity={0.16}
          side={2}
          emissive="red"
          emissiveIntensity={0.25}
        />
      </mesh>

      <mesh ref={ringRef} rotation={[1.2, 0.2, 0.2]}>
        <torusGeometry args={[1.75, 0.18, 3, 30]} />
        <meshStandardMaterial
          color="#d7c29a"
          metalness={0.25}
          roughness={0.1}
          opacity={1}
        />
      </mesh>

      <mesh rotation={[1.2, 0.2, 0.2]} scale={0.92}>
        <torusGeometry args={[1.75, 0.08, 24, 100]} />
        <meshStandardMaterial color="#d7c29a" opacity={1} />
      </mesh>
    </Float>
  );
}

export default function Details3D({
  project,
  top = "8vh",
  left = "8vw",
  size = "378px",
}) {
  const title = project?.title ?? "";
  const technologies = project?.technologies ?? [];

  return (
    <div
      className="details3d-bg"
      aria-hidden="true"
      style={{ top, left, width: size, height: size }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[2, 2, 3]}
          intensity={1.5}
          color="#ffe3a7"
        />
        <directionalLight
          position={[-3, -1, -2]}
          intensity={0.55}
          color="#7da6cc"
        />
        <Planet />
        {title ? (
          <Text
            position={[0, -1.9, 0]}
            fontSize={0.24}
            color="#f4f4f4"
            maxWidth={3.8}
            anchorX="center"
            anchorY="middle"
          >
            {title}
          </Text>
        ) : null}
        <TechTags technologies={technologies} />
        <Environment preset="city" />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={3.4}
          maxDistance={6}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.65}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Canvas>
    </div>
  );
}
