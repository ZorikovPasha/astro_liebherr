import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import React from 'react'
import { SliderNextArrow, SliderPrevArrow } from '../../../components/common/SliderArrows'
import { ROUTES } from '../../../utils/const'

const RentSlider: React.FC = () => {
  const [slider, setSlider] = React.useState<Slider>()
  const [activeSlide, setActiveSlide] = React.useState(0)

  const text = 'Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.'

  const slides = [
    {
      title: 'Гусеничные краны',
      text,
      img: '/static/images/items-rent/pic-1.png',
    },
    { title: 'Экскаваторы', text, img: '/static/images/items-rent/pic-2.webp' },
    { title: 'Бульдозеры', text, img: '/static/images/items-rent/pic-3.webp' },
    {
      title: 'Краны строительные',
      text,
      img: '/static/images/items-rent/pic-4.webp',
    },
    { title: 'Самосвалы', text, img: '/static/images/items-rent/pic-5.webp' },
    { title: 'Гидромолот', text, img: '/static/images/items-rent/pic-6.webp' },
  ]

  const settings = {
    dots: true,
    fade: true,
    infinite: false,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === slides.length - 1} />,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  return (
    <section className="rent rel">
      <div className="container">
        <div className="rent__inner">
          <h2 className="rent__title">
            <span>Спецтехника</span> в аренду
          </h2>
          <Slider className="rent__slider" {...settings} ref={(slider: Slider) => setSlider(slider)}>
            {slides.map(({ title, text, img }, idx) => (
              <div className="rent__slider-item slider-item" key={idx}>
                <div className="slider-item__body flex">
                  <div className="slider-item__images wow animate__animated animate__fadeInLeft">
                    <Image src={img} layout="fill" alt="строительная техника" />
                  </div>
                  <div className="slider-item__info rel">
                    <h3 className="slider-item__title">{title}</h3>
                    <p className="slider-item__text">{text}</p>
                    <Link href={ROUTES.CATALOG}>
                      <a className="slider-item__link btn">Выбрать спецтехнику</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default RentSlider
