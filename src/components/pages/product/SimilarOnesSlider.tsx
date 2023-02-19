import React from 'react'
import Slider from 'react-slick'
import { SliderPrevArrow, SliderNextArrow } from '../../common/SliderArrows'
import CatalogCard from '../catalog/CatalogCard'
import { MachineryType } from '../../../types/dataTypes'

interface ISliderProps {
  items: MachineryType[]
}

const SimilarOnesSlider: React.FC<ISliderProps> = ({ items }) => {
  const [slider, setSlider] = React.useState<Slider>()
  const [activeSlide, setActiveSlide] = React.useState(0)

  const settings = {
    arrows: true,
    dots: true,
    variableWidth: true,
    centerMode: true,
    infinite: false,
    initialSlide: 2,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === items?.length - 2} />,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 993,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 661,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  }
  return (
    <section className="similar">
      <div className="container">
        <h2 className="similar__title">Похожие краны</h2>
        <div className="similar__items">
          <Slider className="similar__items" {...settings} ref={(slider: Slider) => setSlider(slider)}>
            {items && items?.map(({ id, name, features, imgSrc }) => <CatalogCard id={id} key={id} name={name} liftingCapacity={features.liftingCapacity.value} arrowLength={features.arrowLength.value} imgSrc={imgSrc} />)}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default SimilarOnesSlider
