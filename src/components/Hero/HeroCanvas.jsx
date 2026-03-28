import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

/* =========================================
   3D Face — Geometric head that follows cursor
   ========================================= */
function Face({ mouse }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return

    // Smooth lerp toward cursor
    const targetRotY = mouse.current.x * 0.5
    const targetRotX = -mouse.current.y * 0.35

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.04
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.04
    )

    // Subtle floating
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.08
  })

  return (
    <group ref={groupRef}>
      {/* Outer wireframe skull */}
      <mesh>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#6c63ff"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Inner solid head */}
      <mesh>
        <icosahedronGeometry args={[1.55, 2]} />
        <meshStandardMaterial
          color="#16162a"
          roughness={0.85}
          metalness={0.15}
        />
      </mesh>

      {/* Left eye */}
      <mesh position={[-0.48, 0.28, 1.3]}>
        <sphereGeometry args={[0.17, 20, 20]} />
        <meshStandardMaterial
          emissive="#00d4aa"
          emissiveIntensity={3}
          color="#00d4aa"
          toneMapped={false}
        />
      </mesh>

      {/* Right eye */}
      <mesh position={[0.48, 0.28, 1.3]}>
        <sphereGeometry args={[0.17, 20, 20]} />
        <meshStandardMaterial
          emissive="#00d4aa"
          emissiveIntensity={3}
          color="#00d4aa"
          toneMapped={false}
        />
      </mesh>

      {/* Left eye glow */}
      <pointLight
        position={[-0.48, 0.28, 1.6]}
        color="#00d4aa"
        intensity={1.5}
        distance={4}
      />

      {/* Right eye glow */}
      <pointLight
        position={[0.48, 0.28, 1.6]}
        color="#00d4aa"
        intensity={1.5}
        distance={4}
      />

      {/* Mouth line */}
      <mesh position={[0, -0.35, 1.4]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.03, 0.05]} />
        <meshStandardMaterial
          emissive="#6c63ff"
          emissiveIntensity={2}
          color="#6c63ff"
          toneMapped={false}
        />
      </mesh>

      {/* Nose bridge */}
      <mesh position={[0, 0.05, 1.45]}>
        <boxGeometry args={[0.04, 0.3, 0.04]} />
        <meshStandardMaterial
          color="#6c63ff"
          emissive="#6c63ff"
          emissiveIntensity={1}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

/* =========================================
   Floating Particles
   ========================================= */
function Particles() {
  const pointsRef = useRef()
  const count = 180

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16
      arr[i * 3 + 2] = (Math.random() - 0.5) * 16
    }
    return arr
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.008
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#6c63ff"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

/* =========================================
   Main HeroCanvas export
   ========================================= */
export default function HeroCanvas() {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      style={{ width: '100%', height: '100%' }}
      dpr={[1, 2]}
    >
      {/* Lighting */}
      <ambientLight intensity={0.25} />
      <pointLight position={[5, 5, 5]} intensity={0.9} color="#ffffff" />
      <pointLight position={[-5, -2, 4]} intensity={0.6} color="#6c63ff" />
      <pointLight position={[3, -4, -2]} intensity={0.35} color="#00d4aa" />

      {/* 3D Face */}
      <Face mouse={mouse} />

      {/* Background particles */}
      <Particles />

      {/* Floating geometric accents */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh position={[-3.2, 2, -3]} scale={0.35}>
          <octahedronGeometry />
          <meshStandardMaterial
            color="#6c63ff"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.9}>
        <mesh position={[3.8, -1.8, -2]} scale={0.28}>
          <tetrahedronGeometry />
          <meshStandardMaterial
            color="#00d4aa"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.9} floatIntensity={0.4}>
        <mesh position={[-2.8, -2.2, -2]} scale={0.22}>
          <dodecahedronGeometry />
          <meshStandardMaterial
            color="#ff6b9d"
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.7}>
        <mesh position={[2.5, 2.5, -2.5]} scale={0.18}>
          <torusKnotGeometry args={[1, 0.3, 64, 8]} />
          <meshStandardMaterial
            color="#6c63ff"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>
      </Float>
    </Canvas>
  )
}
