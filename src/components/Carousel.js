import { Fragment, useState, useEffect } from 'react'
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
  }, [isPlaying, active])

  return (
    <>
      <div id="carousel">
        {items &&
          items.map((img, idx) => {
            const { src, width, height } = img
            const style = { width: `${width}px`, height: `${height}px` }
            return (
              <Fragment key={idx}>
                <img
                  srcSet={`/images/${src}@2x.jpg 2x, /images/${src}@3x.jpg 3x`}
                  src={`/images/${src}.jpg`}
                  alt={`Slide ${idx}`}
                  className={`carousel-item item-${idx} active-${active}`}
                  style={style}
                />
                <div className={`slide-overlay item-${idx} active-${active}`} style={style}></div>
              </Fragment>
            )
          })}
      </div>
      <CarouselControls setActive={setActive} active={active} setIsPlaying={setIsPlaying} isPlaying={isPlaying} numSlides={items.length} />
    </>
  )
}

export default Carousel
