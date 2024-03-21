import cx from 'classnames'

import PauseButton from './icons/Pause'
import PlayButton from './icons/Play'

const CarouselControls = ({ setActive, active, isPlaying, setIsPlaying }) => {
  const togglePlaying = e => {
    e.stopPropagation()
    e.preventDefault()
    setIsPlaying(!isPlaying)
  }

  const handleJump = e => {
    e.stopPropagation()
    e.preventDefault()
    const { value } = e.target
    setIsPlaying(false)
    setActive(value)
  }

  return (
    <div id="carousel-controls">
      <button className="slide-control" value={0} onClick={handleJump}>
        01
        <span className={cx('timer', { active: isPlaying && active === 0 })}></span>
      </button>
      <button className="slide-control" value={1} onClick={handleJump}>
        02
        <span className={cx('timer', { active: isPlaying && active === 1 })}></span>
      </button>
      <button className="slide-control" value={2} onClick={handleJump}>
        03
        <span className={cx('timer', { active: isPlaying && active === 2 })}></span>
      </button>
      <button className="slide-control" onClick={togglePlaying}>
        {isPlaying ? <PauseButton /> : <PlayButton />}
      </button>
    </div>
  )
}

export default CarouselControls
