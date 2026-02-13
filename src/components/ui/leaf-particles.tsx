import * as React from 'react'
import { useEffect, useRef } from 'react'

interface Leaf {
  x: number
  y: number
  rotation: number
  rotationSpeed: number
  fallSpeed: number
  drift: number
  size: number
  opacity: number
  color: string
  shape: 'maple' | 'oak' | 'willow'
}

interface LeafParticlesProps {
  className?: string
  leafCount?: number
  colors?: string[]
}

export function LeafParticles({
  className = "",
  leafCount = 30,
  colors = ["#ffffff", "#f0f0f0", "#e8e8e8", "#d0d0d0"]
}: LeafParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const leavesRef = useRef<Leaf[]>([])

  // Realistic leaf shape paths
  const leafShapes = {
    maple: (ctx: CanvasRenderingContext2D, size: number) => {
      // Maple leaf with pointed lobes
      ctx.beginPath()
      ctx.moveTo(0, -size * 0.4)
      // Top left lobe
      ctx.quadraticCurveTo(-size * 0.3, -size * 0.3, -size * 0.5, -size * 0.1)
      ctx.quadraticCurveTo(-size * 0.6, size * 0.1, -size * 0.5, size * 0.3)
      // Left side
      ctx.quadraticCurveTo(-size * 0.4, size * 0.4, -size * 0.2, size * 0.5)
      // Bottom point
      ctx.quadraticCurveTo(0, size * 0.6, size * 0.2, size * 0.5)
      // Right side
      ctx.quadraticCurveTo(size * 0.4, size * 0.4, size * 0.5, size * 0.3)
      // Top right lobe
      ctx.quadraticCurveTo(size * 0.6, size * 0.1, size * 0.5, -size * 0.1)
      ctx.quadraticCurveTo(size * 0.3, -size * 0.3, 0, -size * 0.4)
      ctx.closePath()
    },
    oak: (ctx: CanvasRenderingContext2D, size: number) => {
      // Oak leaf with rounded lobes
      ctx.beginPath()
      ctx.moveTo(0, -size * 0.45)
      // Left side with rounded lobes
      ctx.quadraticCurveTo(-size * 0.25, -size * 0.2, -size * 0.4, size * 0.05)
      ctx.quadraticCurveTo(-size * 0.35, size * 0.25, -size * 0.25, size * 0.4)
      ctx.quadraticCurveTo(-size * 0.15, size * 0.45, 0, size * 0.5)
      // Right side with rounded lobes
      ctx.quadraticCurveTo(size * 0.15, size * 0.45, size * 0.25, size * 0.4)
      ctx.quadraticCurveTo(size * 0.35, size * 0.25, size * 0.4, size * 0.05)
      ctx.quadraticCurveTo(size * 0.25, -size * 0.2, 0, -size * 0.45)
      ctx.closePath()
    },
    willow: (ctx: CanvasRenderingContext2D, size: number) => {
      // Willow leaf - long and narrow
      ctx.beginPath()
      ctx.moveTo(0, -size * 0.5)
      // Left edge
      ctx.quadraticCurveTo(-size * 0.15, -size * 0.2, -size * 0.2, size * 0.1)
      ctx.quadraticCurveTo(-size * 0.15, size * 0.3, -size * 0.1, size * 0.45)
      // Bottom point
      ctx.lineTo(0, size * 0.5)
      // Right edge
      ctx.lineTo(size * 0.1, size * 0.45)
      ctx.quadraticCurveTo(size * 0.15, size * 0.3, size * 0.2, size * 0.1)
      ctx.quadraticCurveTo(size * 0.15, -size * 0.2, 0, -size * 0.5)
      ctx.closePath()
    }
  }

  // Initialize leaves
  const initLeaves = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const width = canvas.width
    const height = canvas.height

    leavesRef.current = Array.from({ length: leafCount }, () => {
      const shapes: Array<'maple' | 'oak' | 'willow'> = ['maple', 'oak', 'willow']
      return {
        x: Math.random() * width,
        y: Math.random() * height - height, // Start above viewport
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        fallSpeed: 0.5 + Math.random() * 1.5,
        drift: (Math.random() - 0.5) * 0.5,
        size: 8 + Math.random() * 12,
        opacity: 0.3 + Math.random() * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)]
      }
    })
  }

  // Draw a single leaf
  const drawLeaf = (ctx: CanvasRenderingContext2D, leaf: Leaf) => {
    ctx.save()
    ctx.translate(leaf.x, leaf.y)
    ctx.rotate(leaf.rotation)
    ctx.globalAlpha = leaf.opacity

    // Draw leaf shape
    const shapeFunction = leafShapes[leaf.shape]
    shapeFunction(ctx, leaf.size)

    // Fill with color and gradient for depth
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, leaf.size)
    gradient.addColorStop(0, leaf.color)
    gradient.addColorStop(1, `${leaf.color}80`)
    ctx.fillStyle = gradient
    ctx.fill()

    // Add main vein line
    ctx.strokeStyle = leaf.color
    ctx.globalAlpha = leaf.opacity * 0.6
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, -leaf.size * 0.4)
    ctx.lineTo(0, leaf.size * 0.5)
    ctx.stroke()

    // Add side veins for realism
    ctx.globalAlpha = leaf.opacity * 0.3
    ctx.lineWidth = 0.5
    ctx.beginPath()
    // Left veins
    ctx.moveTo(0, -leaf.size * 0.2)
    ctx.lineTo(-leaf.size * 0.2, leaf.size * 0.1)
    ctx.moveTo(0, 0)
    ctx.lineTo(-leaf.size * 0.15, leaf.size * 0.3)
    // Right veins
    ctx.moveTo(0, -leaf.size * 0.2)
    ctx.lineTo(leaf.size * 0.2, leaf.size * 0.1)
    ctx.moveTo(0, 0)
    ctx.lineTo(leaf.size * 0.15, leaf.size * 0.3)
    ctx.stroke()

    ctx.restore()
  }

  // Animation loop
  const animate = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Update and draw leaves
    leavesRef.current.forEach((leaf) => {
      // Update position with more realistic physics
      leaf.y += leaf.fallSpeed
      // Swaying motion - more pronounced for realism
      leaf.x += leaf.drift + Math.sin(leaf.y * 0.008) * 0.5 + Math.cos(leaf.y * 0.005) * 0.3
      // Rotation with slight wobble
      leaf.rotation += leaf.rotationSpeed + Math.sin(leaf.y * 0.01) * 0.01

      // Reset if leaf falls off screen
      if (leaf.y > height + 50) {
        leaf.y = -50
        leaf.x = Math.random() * width
        leaf.rotation = Math.random() * Math.PI * 2
      }

      // Wrap horizontally
      if (leaf.x < -50) leaf.x = width + 50
      if (leaf.x > width + 50) leaf.x = -50

      // Draw leaf
      drawLeaf(ctx, leaf)
    })

    animationFrameRef.current = requestAnimationFrame(animate)
  }

  // Setup canvas and start animation
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initLeaves()
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Start animation
    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [leafCount, colors])

  return (
    <canvas
      ref={canvasRef}
      className={`leaf-particles ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}

