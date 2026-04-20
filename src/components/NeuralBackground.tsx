"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 130;
const CONNECTION_THRESHOLD = 32;

function Particles() {
  const meshRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);
  const { size } = useThree();

  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Initialise positions and velocities
  const { positions, velocities } = useMemo(() => {
    const W = size.width / 10;
    const H = size.height / 10;
    const pos: number[] = [];
    const vel: number[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos.push((Math.random() - 0.5) * W * 2, (Math.random() - 0.5) * H * 2, (Math.random() - 0.5) * 20);
      vel.push((Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.03, 0);
    }
    return { positions: new Float32Array(pos), velocities: vel };
  }, [size]);

  const ptGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));
    return g;
  }, [positions]);

  const lineGeo = useMemo(() => new THREE.BufferGeometry(), []);

  let frame = 0;
  useFrame(({ camera }) => {
    frame++;
    const pos = ptGeo.attributes.position.array as Float32Array;
    const W = size.width / 10;
    const H = size.height / 10;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3]     += velocities[i * 3]     + mouse.current.x * 0.008;
      pos[i * 3 + 1] += velocities[i * 3 + 1] + mouse.current.y * 0.008;
      if (pos[i * 3]     >  W)  pos[i * 3]     = -W;
      if (pos[i * 3]     < -W)  pos[i * 3]     =  W;
      if (pos[i * 3 + 1] >  H)  pos[i * 3 + 1] = -H;
      if (pos[i * 3 + 1] < -H)  pos[i * 3 + 1] =  H;
    }
    ptGeo.attributes.position.needsUpdate = true;

    // Rebuild connection lines every 3 frames for perf
    if (frame % 3 === 0) {
      const verts: number[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          if (Math.sqrt(dx * dx + dy * dy) < CONNECTION_THRESHOLD) {
            verts.push(pos[i*3], pos[i*3+1], pos[i*3+2]);
            verts.push(pos[j*3], pos[j*3+1], pos[j*3+2]);
          }
        }
      }
      lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(verts), 3));
    }

    // Subtle camera drift toward mouse
    camera.position.x += (mouse.current.x * 4 - camera.position.x) * 0.015;
    camera.position.y += (mouse.current.y * 4 - camera.position.y) * 0.015;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <points ref={meshRef} geometry={ptGeo}>
        <pointsMaterial color="#00e5ff" size={0.55} transparent opacity={0.5} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial color="#00e5ff" transparent opacity={0.07} />
      </lineSegments>
    </>
  );
}

export default function NeuralBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 80], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
