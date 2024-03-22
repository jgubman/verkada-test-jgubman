const Lorem = ({ head, title, body, button }) => {
  const handleClick = () => {
    window.open('https://www.verkada.com')
  }

  return (
    <>
      {head && <h3 className="lorem-head">{head}</h3>}
      {title && <h1 className="lorem-title">{title}</h1>}
      {body && <p className="lorem-body">{body}</p>}
      {button && (
        <button className="lorem-button" onClick={handleClick}>
          {button}
        </button>
      )}
    </>
  )
}

export default Lorem
