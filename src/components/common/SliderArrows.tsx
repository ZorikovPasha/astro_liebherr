interface IArrowProps {
  onClick: (() => void) | undefined
  isDisabled?: boolean
}

export const SliderPrevArrow: React.FC<IArrowProps> = ({ onClick, isDisabled }) => {
  return (
    <button type="button" className={`slick-btn slick-prev ${isDisabled ? 'slick-disabled' : ''}`} aria-label="previous slide" onClick={onClick}>
      <div className="slider-arr-wrapper">
        <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17158C4.73079 0.976313 4.73079 0.659731 4.53553 0.464468C4.34027 0.269206 4.02369 0.269206 3.82843 0.464468L0.646446 3.64645ZM31 3.5L0.999998 3.5L0.999998 4.5L31 4.5L31 3.5Z"
            fill="#2D2D2D"
          />
        </svg>
      </div>
    </button>
  )
}

export const SliderNextArrow: React.FC<IArrowProps> = ({ onClick, isDisabled }) => {
  return (
    <button type="button" aria-label="next slide" className={`slick-btn slick-next ${isDisabled ? 'slick-disabled' : ''}`} onClick={onClick}>
      <div className="slider-arr-wrapper">
        <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64644L27.1716 0.464464C26.9763 0.269202 26.6597 0.269202 26.4645 0.464464C26.2692 0.659726 26.2692 0.976308 26.4645 1.17157L29.2929 4L26.4645 6.82842C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM4.37114e-08 4.5L30 4.5L30 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
            fill="#2D2D2D"
          />
        </svg>
      </div>
    </button>
  )
}
