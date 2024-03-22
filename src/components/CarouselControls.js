import { useCallback, useRef } from 'react'

import cx from 'classnames'

import PauseButton from './icons/Pause'
import PlayButton from './icons/Play'

const CarouselControls = ({ setActive, active, isPlaying, setIsPlaying, numSlides }) => {
  const togglePlaying = useCallback(
    e => {
      setIsPlaying(!isPlaying)
      e.stopPropagation()
      e.preventDefault()
    },
    [isPlaying, setIsPlaying]
  )

  const handleJump = useCallback(
    e => {
      e.stopPropagation()
      e.preventDefault()
      const { value } = e.target
      setIsPlaying(false)
      setActive(parseInt(value))
    },
    [setIsPlaying, setActive]
  )

  return (
    <div id="carousel-controls" className={cx({ playing: isPlaying })}>
      {numSlides &&
        [...Array(numSlides)].map((_, slideNum) => {
          const activeButton = active === slideNum
          return (
            <button
              key={`button-${slideNum}`}
              className={cx('slide-control', { active: activeButton })}
              value={slideNum}
              onClick={handleJump}
            >
              {(slideNum + 1).toString().padStart(2, '0')}
              <span className={'timer'}></span>
            </button>
          )
        })}
      <button key={'play-toggle-button'} className="slide-control" onClick={togglePlaying}>
        {isPlaying ? <PauseButton /> : <PlayButton />}
      </button>
    </div>
  )
}

export default CarouselControls
