import * as React from "react"
import { useMemo, useCallback } from "react"

import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from "react-three-fiber"
import circleImg from '../images/circle.png'
import { Box } from "@mui/material"

const Points = () => {
  const imgTex = useLoader(THREE.TextureLoader, circleImg)
  const bufferRef = React.useRef();

  let t = 0
  let f = 0.002
  let a = 3
  const graph = useCallback((x: number, z: number) => {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a
  }, [t, f, a])

  const count = 100
  const sep = 3


  let positions = useMemo(() => {
    let position: any[] = []

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2)
        let y = graph(x, z);
        position.push(x, y, z);
      }
    }

    return new Float32Array(position)
  }, [count, sep, graph]);

  useFrame(() => {
    if (!bufferRef || !bufferRef.current) return

    t += 15
    const positions = (bufferRef.current as any).array

    let i = 0;

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        positions[i + 1] = graph(x, z)
        i += 3;
      }
    }
    (bufferRef.current as any).needsUpdate = true
  })

  return (
    <points>
      <bufferGeometry attach='geometry'>
        <bufferAttribute
          ref={bufferRef as any}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        >
        </bufferAttribute>
      </bufferGeometry>
      <pointsMaterial
        // attach='material'
        map={imgTex as any}
        color={0XFFFFFF}
        size={0.5}
        sizeAttenuation
        transparent
        alphaTest={0.5}
      >

      </pointsMaterial>
    </points>
  )
}

const Wave = () => {
  return (
    <Canvas
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
      <Points />
    </Canvas>
  )
}

export default Wave