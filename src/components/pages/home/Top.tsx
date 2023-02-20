import React from 'react'
import { useStore } from '@nanostores/react';
import Slider, { Settings } from 'react-slick'
import { ROUTES } from '../../../utils/const'
import modalsStore from '../../../store/modals'

interface IArrowProps {
  onClick: (() => void) | undefined
  isDisabled: boolean
}

const SliderPrevArrow: React.FC<IArrowProps> = ({ onClick, isDisabled }) => {
  return (
    <button 
      type="button" 
      className={`slick-btn slick-prev ${isDisabled ? 'slick-disabled' : ''}`} 
      onClick={onClick}
    >
      <img 
        src="/images/slider-arr-left.svg" 
        alt="" 
      />
    </button>
  )
}

const SliderNextArrow: React.FC<IArrowProps> = ({ onClick, isDisabled }) => {
  return (
    <button 
      type="button" 
      className={`slick-btn slick-next ${isDisabled ? 'slick-disabled' : ''}`}
      onClick={onClick}
    >
      <img 
        src="/images/slider-arr-right.svg" 
        alt="" 
      />
    </button>
  )
}

const Top: React.FC = () => {
  const $modalsStore = useStore(modalsStore);

  const [slider, setSlider] = React.useState<Slider>()
  const [activeSlide, setActiveSlide] = React.useState(0)

  const slides = [
    { num: '01', total: '04', src: '/images/top-bg.webp' },
    { num: '02', total: '04', src: '/images/top-bg.webp' },
    { num: '03', total: '04', src: '/images/top-bg.webp' },
    { num: '04', total: '04', src: '/images/top-bg.webp' },
  ]

  const settings: Settings = {
    autoplay: true,
    draggable: true,
    fade: true,
    infinite: false,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === slides.length - 1} />,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 670,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  const handleOpenPopup = () => {
    modalsStore.set({
      opened: {
        ...$modalsStore.opened,
        request: true
      }
    })

    document.documentElement.classList.add('lock')
  }

  return (
    <section className="top">
      <div className="container-fluid">
        <div className="top__inner rel after">
          <Slider 
            className={`top__slider`} 
            {...settings} 
            ref={(slider: Slider) => setSlider(slider)}
          >
            {slides.map(({ num, total, src }) => 
              <div className="rel" key={num + src}>
                <div className="top__slider-numbers">
                  <span className="top__slider-num">{num}/</span>
                  <span className="top__slider-total">{total}</span>
                </div>
                <div className="top__slider-images">
                  <div className="top__slider-img">
                    <img src={src} alt="" />
                  </div>
                </div>
              </div>
            )}
          </Slider>

          <div className="top__content after">
            <div className="top__container container">
              <div className="top__content-box rel">
                <h1 className="top__title rel after animate__animated animate__fadeIn animate__delay-1s">Аренда спецтехники Liebherr для любых задач</h1>
                <p className="top__text animate__animated animate__fadeIn animate__delay-2s">Мобильные, гусеничные и башенные краны LIEBHERR в аренду для любых задач и грузов. работаем по всей России</p>
                <div className="top__btns flex aic jcsb animate__animated animate__fadeIn animate__delay-2s">
                  <button 
                    className="top__callme btn" 
                    onClick={handleOpenPopup}
                  >
                    Заказать звонок
                  </button>
                  <a className="top__link btn-line" href={ROUTES.CATALOG}>
                    Каталог техники
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Top
