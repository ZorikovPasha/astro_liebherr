import Slider, { Settings } from 'react-slick'
import React from 'react'
import { SliderNextArrow, SliderPrevArrow } from '../../components/common/SliderArrows'

interface ISliderProps {
  settings: Settings,
  rootElClass: string,
  children: React.ReactNode
  count: number
}

const AppSlider: React.FC<ISliderProps> = ({ 
  settings, 
  rootElClass="", 
  count=0,
  children 
}) => {
  const [slider, setSlider] = React.useState<Slider>()
  const [activeSlide, setActiveSlide] = React.useState(0)

  return (
    <Slider 
      className={rootElClass}
      {...settings} 
      afterChange={(current: number) => setActiveSlide(current)}
      ref={(slider: Slider) => setSlider(slider)}
      prevArrow={<SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />}
      nextArrow={<SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === count - 1} />}
    >
      {children}
    </Slider> 
  )
}

export default AppSlider
