import React from 'react'
import PopupVideo from "../../common/PopupVideo"

export const VideoPic = () => {
  const [isPlaying, setPlaying] = React.useState(false)

  const onPlay = () => {
    setPlaying(true)
    document.body.classList.add('lock')
  }

  const onClose = () => {
    setPlaying(false)
    document.body.classList.remove('lock')
  }

  return (
    <>
      <div className="about__video wow animate__animated animate__fadeIn animate__delay-1s">
        <div className="about__video-box rel">
          <button className="about__video-play" onClick={onPlay}>
            <svg className="anim-color" width="113" height="112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="56.998" cy="56.001" r="38.154" fill="transparent" />
              <path d="M56.998 94.08c-21.056 0-38.08-17.023-38.08-38.08 0-21.055 17.024-38.08 38.08-38.08 21.056 0 38.08 17.025 38.08 38.08 0 21.057-17.024 38.08-38.08 38.08zm0-71.68c-18.592 0-33.6 15.009-33.6 33.6 0 18.593 15.008 33.6 33.6 33.6 18.592 0 33.6-15.007 33.6-33.6 0-18.591-15.008-33.6-33.6-33.6z" />
              <path d="M45.798 75.49V36.512L79.398 56l-33.6 19.488zm4.48-31.36v23.52l20.16-11.873-20.16-11.648z" />
            </svg>
          </button>
        </div>
        <div className="about__images">
          <img src="/images/about-big.jpg" />
        </div>
      </div>

      {isPlaying && <PopupVideo videoId="0UUK4VDblXM" onClose={onClose} />}
    </>
  )
}
