import { useStore } from '@nanostores/react'
import React from 'react'
import Slider from 'react-slick'
import modalsStore from '../../../store/modals'
import { MachineryType } from '../../../types/dataTypes'

interface IView {
  info: MachineryType
}

const ProductView: React.FC<IView> = ({ info }) => {
  const $modalsStore = useStore(modalsStore);

  const [thumbsSlider, setThumbsSlider] = React.useState<Slider>()
  const [fullSlider, setFullSlider] = React.useState<Slider>()

  const thumsSettings = {
    slidesToShow: 3,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
  }

  const slidesSettings = {
    fade: true,
    arrows: false,
  }

  const onOrder = () => {
    modalsStore.set({
      opened: {
        ...$modalsStore.opened,
        order: true,
      }
    });
    document.documentElement.classList.add('lock')
  }

  return (
    <section className="product">
      <div className="container">
        <h1 className="product__title">Гусеничный кран Liebherr LR 1750</h1>
        <div className="product__inner rel flex">
          <div className="product__images">
            <Slider 
              {...slidesSettings} 
              className="product__slider" 
              asNavFor={thumbsSlider} 
              ref={(slider1: Slider) => setFullSlider(slider1)}
            >
              {info?.thumbs?.map((imgSrc, idx) => 
                <div className="product__slider-item" key={idx}>
                  <div className="product__slider-images rel">
                    <img 
                      src={imgSrc.replace("/static", "")} 
                      alt="Строительная техника" 
                      width="100%" 
                      height="100%" 
                    />
                  </div>
                </div>
              )}
            </Slider>
            <Slider 
              {...thumsSettings} 
              className="product__thumbs" 
              asNavFor={fullSlider} 
              ref={(slider2: Slider) => setThumbsSlider(slider2)}
            >
              {info?.thumbs?.map((imgSrc, idx) => (
                <div className="product__thumb" key={idx}>
                  <div className="product__thumb-images">
                    <img 
                      src={imgSrc.replace("/static", "")} 
                      width="100%" 
                      height="100%" 
                      alt="Строительная техника" 
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="product__info">
            <ul className="product__info-list product-list">
              {info?.features &&
                Object.entries(info.features)?.map((arr) => 
                  <li className="product-list__item flex aic" key={arr[1].value}>
                    <p className="product-list__text">{arr[1].text}:</p>
                    <p className="product-list__text">{arr[1].value}</p>
                  </li>
                )}
            </ul>
            <button 
              className="product__info-btn btn" 
              onClick={onOrder}
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductView
