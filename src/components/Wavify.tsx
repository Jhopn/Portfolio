import { useRef, useState } from "react"
import Wave from "react-wavify"
import "../styles/wavify/wavify.css"

export function Wavify() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const calculateWaveParams = () => {
    if (isHovering) {
      return {
        height: 30,
        amplitude: 12,
        speed: 0.40,
        points: 5,
      }
    } else {
      return {
        height: 30,
        amplitude: 50,
        speed: 0.15,
        points: 4,
      }
    }
  }

  const waveParams = calculateWaveParams()

  return (
    <div
      ref={containerRef}
      className="wave-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="waves-content">
        <Wave
          fill="#ffa800"
          paused={false}
          options={{
            height: waveParams.height,
            amplitude: waveParams.amplitude,
            speed: waveParams.speed,
            points: waveParams.points,
          }}
          className="wave"
        />
      </div>
    </div>
  )
}
