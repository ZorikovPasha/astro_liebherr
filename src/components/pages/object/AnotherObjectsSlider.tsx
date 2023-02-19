import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'

import { SliderNextArrow, SliderPrevArrow } from '../../../components/common/SliderArrows'
import { ConstructionType } from '../../../types/dataTypes'
import { ROUTES } from '../../../utils/const'

interface ISlider {
  items: ConstructionType[]
}

const AnotherObjectsSlider: React.FC<ISlider> = ({ items }) => {
  const [slider, setSlider] = React.useState<Slider>()
  const [activeSlide, setActiveSlide] = React.useState(0)

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    infinite: false,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === items?.length - 2} />,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <div className="another-ones">
      <div className="container">
        <h2 className="another-ones__title">Другие объекты</h2>
        <Slider className="another-ones__slider" {...settings} ref={(slider: Slider) => setSlider(slider)}>
          {items &&
            items?.map(({ id, title, preview }) => (
              <div className=" item-object" key={id}>
                <div className="item-object__images rel">
                  <Image src={preview} layout="fill" alt="Фото объекта стройки" />
                </div>
                <h6 className="item-object__title">
                  <Link href={ROUTES.OBJECTS + id}>
                    <a className="item-object__link">{title}</a>
                  </Link>
                </h6>
              </div>
            ))}
        </Slider>
        <div className="another-ones__btn-wrapper">
          <a className="another-ones__btn" href={ROUTES.OBJECTS}>
            Смотреть все
          </a>
        </div>
      </div>
    </div>
  )
}

export default AnotherObjectsSlider
