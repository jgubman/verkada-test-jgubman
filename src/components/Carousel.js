import { useState, useEffect } from 'react'
import CarouselControls from './CarouselControls'

const Carousel = ({ items }) => {
  const [active, setActive] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    let timerId
    if (isPlaying) {
      timerId = setInterval(() => {
        setActive(prevActive => (prevActive + 1) % 3)
      }, 4000)
    }
    return () => clearInterval(timerId)
  }, [isPlaying])

  return (
    <>
      <div id="carousel">
        {items &&
          items.map((img, idx) => {
            return (
              <img
                srcSet={`/images/${img}@2x.jpg 2x, /images/${img}@3x.jpg 3x`}
                src={`/images/${img}.jpg`}
                alt={idx}
                key={idx}
                className={`carousel-item item-${idx} active-${active}`}
              />
            )
          })}
      </div>
      <CarouselControls setActive={setActive} active={active} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
    </>
  )
}

export default Carousel
