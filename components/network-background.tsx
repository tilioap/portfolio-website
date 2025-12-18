"use client"

import { useEffect, useRef } from "react"

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajuster la taille du canvas à la fenêtre
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Paramètres du réseau
    const particlesArray: Particle[] = []
    const numberOfParticles = 100
    const maxDistance = 150

    // Classe pour les particules
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25

        // 10% des particules seront émeraude
        this.color = Math.random() > 0.9 ? "rgba(16, 185, 129, 0.8)" : "rgba(255, 255, 255, 0.5)"
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Créer les particules
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Connecter les particules avec des lignes
    function connect() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance

            // Si les deux particules sont émeraude, la ligne sera émeraude
            if (particlesArray[a].color.includes("16, 185, 129") && particlesArray[b].color.includes("16, 185, 129")) {
              ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.3})`
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`
            }

            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      connect()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 to-slate-900" />
}
