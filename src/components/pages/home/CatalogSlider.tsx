import React from 'react'

import CatalogCard from '../catalog/CatalogCard'
import { ROUTES } from '../../../utils/const'
import AppSlider from '../../common/AppSlider'
import { useStore } from '@nanostores/react'
import productsStore from '../../../store/products'

const CatalogSlider: React.FC = () => {
  const $productsStore = useStore(productsStore)

  const settings = {
    arrows: true,
    dots: true,
    variableWidth: true,
    centerMode: true,
    infinite: false,
    initialSlide: 1,
  }

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="catalog__title">Каталог техники</h2>
      </div>
      <div className="container-fluid">
        <div className="catalog-slider">
          <AppSlider 
            rootElClass='catalog-slider'
            settings={settings}
            count={$productsStore.items.length}
          >
            {$productsStore.items?.map(({ id, name, imgSrc, features }) => 
              <CatalogCard 
                key={id} 
                id={id} 
                rootElClass="product-item--padding" 
                name={name} 
                imgSrc={imgSrc} 
                liftingCapacity={features.liftingCapacity.value} 
                arrowLength={features.arrowLength.value} 
              />
              )}
          </AppSlider>
        </div>
        <div className="catalog__btn-wrapper">
          <a 
            className="catalog__btn btn-line btn-line--orange" 
            href={ROUTES.CATALOG}
          >
            Перейти в каталог
          </a>
        </div>
      </div>
    </section>
  )
}

export default CatalogSlider
