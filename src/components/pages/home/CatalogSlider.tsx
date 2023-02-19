import React from 'react'
import { useSelector } from 'react-redux'

import CatalogCard from '../catalog/CatalogCard'
import { selectProducts } from '../../../store/selectors'
import { ROUTES } from '../../../utils/const'
import AppSlider from '../../common/AppSlider'

const CatalogSlider: React.FC = () => {
  const items = useSelector(selectProducts)

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
            count={items.length}
          >
            {items?.map(({ id, name, imgSrc, features }) => 
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
            <a>Перейти в каталог</a>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CatalogSlider
