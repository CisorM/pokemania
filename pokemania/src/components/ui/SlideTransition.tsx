import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SlideTransition({ children }) {
  const location = useLocation()
  const nodeRef = useRef(null)

  useEffect(() => {
    const node = nodeRef.current
    if (node) {
      const { scrollWidth, clientWidth } = node
      const distance = scrollWidth - clientWidth
      const duration = 300 // duration in milliseconds
      const startTime = performance.now()

      const animate = (time) => {
        const progress = (time - startTime) / duration
        if (progress < 1) {
          node.style.transform = `translateX(${distance * progress}px)`
          requestAnimationFrame(animate)
        } else {
          node.style.transform = 'translateX(0)'
        }
      }

      requestAnimationFrame(animate)
    }
  }, [location])

  return <div ref={nodeRef}>{children}</div>
}