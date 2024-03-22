/* eslint-disable jsx-a11y/no-redundant-roles */
import { useRef } from 'react'

import Chevron from './icons/Chevron'
import Arrow from './icons/Arrow'

const Lorem = ({ head, title, body, button }) => {
  const buttonRef = useRef(null)

  const handleClick = () => {
    window.open('https://www.verkada.com')
  }

  return (
    <>
      {head && <h3 className="lorem-head">{head}</h3>}
      {title && <h1 className="lorem-title">{title}</h1>}
      {body && <p className="lorem-body">{body}</p>}
      {button && (
        <button className="lorem-button" onClick={handleClick} ref={buttonRef} aria-label="Learn More" title="Learn More" role="button">
          {button}
          <Chevron cx="chevron-icon" />
          <Arrow cx="arrow-icon" />
        </button>
      )}
    </>
  )
}

export default Lorem
