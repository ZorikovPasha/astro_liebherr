import React from 'react'
import { useStore } from '@nanostores/react'

import CatalogAside from '../../pages/catalog/CatalogAside'
import CatalogCard from '../../pages/catalog/CatalogCard'
import FilterControls from '../../pages/catalog/FilterControls'
import Pagination from '../../pages/catalog/Pagination'
import Error from '../../common/Error'
import AppEmpty from '../../common/AppEmpty'
import productsStore from '../../../store/products'

const Catalog: React.FC = () => {
  const $productsStore = useStore(productsStore);

  const [activeView, setActiveView] = React.useState<'grid' | 'list'>('grid')

  const AsideRef = React.useRef(null)

  const query = React.useRef('')

  const onAsideOpen = React.useRef<null | (() => void)>(null)

  return (
    <div className="catalog-content">
      <div className="container">
        <div className="catalog-content__inner rel flex">
          <CatalogAside 
            ref={AsideRef} 
            query={query} 
            onOpen={onAsideOpen} 
          />
          <div className="catalog-content__body">
            <FilterControls 
              activeView={activeView} 
              setActiveView={setActiveView} 
              onAsideOpen={onAsideOpen} 
            />
            {$productsStore.isError 
              ? <Error />
              : $productsStore.items?.length 
                ? <div className={`catalog-content__items ${activeView === 'list' ? 'catalog-content__items--list' : ''}`}>
                  {$productsStore.items?.map(({ id, name, features, imgSrc }) => 
                    <CatalogCard 
                      id={id} 
                      key={id} 
                      name={name} 
                      liftingCapacity={features.liftingCapacity.value} 
                      arrowLength={features.arrowLength.value} 
                      imgSrc={imgSrc.replace("/static", "")} 
                    />
                  )}
                </div>
                : <AppEmpty />
            }
            <Pagination query={query} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
