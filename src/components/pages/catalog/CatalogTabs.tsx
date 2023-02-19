import React from 'react'
import { useStore } from '@nanostores/react'
import filtersStore from '../../../store/filters'

const CatalogTabs: React.FC = () => {
  const $filtersStore = useStore(filtersStore);

  const tabs = [
    { filter: 40, text: '40 тонн' },
    { filter: 50, text: '50 тонн' },
    { filter: 65, text: '65 тонн' },
    { filter: 68, text: '68 тонн' },
    { filter: 70, text: '70 тонн' },
    { filter: 82, text: '82.5 тонн' },
    { filter: 84, text: '84 тонн' },
    { filter: 85, text: '85 тонн' },
    { filter: 90, text: '90 тонн' },
    { filter: 93.8, text: '93.8 тонн' },
    { filter: 95, text: '95 тонн' },
    { filter: 112.5, text: '112.5 тонн' },
    { filter: 120, text: '120 тонн' },
    { filter: 131.6, text: '131.6 тонн' },
    { filter: 150, text: '150 тонн' },
    { filter: 160, text: '160 тонн' },
    { filter: 200, text: '200 тонн' },
    { filter: 250, text: '250 тонн' },
    { filter: 280, text: '280 тонн' },
    { filter: 300, text: '300 тонн' },
    { filter: 360, text: '360 тонн' },
    { filter: 400, text: '400 тонн' },
    { filter: 500, text: '500 тонн' },
    { filter: 750, text: '750 тонн' },
  ]

  const TABS_ON_MOBILE = 9

  const [activeTabs, setActiveTabs] = React.useState([-1])
  const [itemsToShow, setItemsToShow] = React.useState(tabs.length)

  React.useEffect(() => {
    const onResize = () => setItemsToShow(window.innerWidth < 768 ? TABS_ON_MOBILE : tabs.length)

    window.addEventListener('resize', onResize)
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [tabs.length])

  const onShowMore = () => {
    setItemsToShow(itemsToShow === TABS_ON_MOBILE ? tabs.length : TABS_ON_MOBILE)
  }

  const onTabClick = (idx: number) => {
    filtersStore.set({
      ...$filtersStore,
      weights: $filtersStore.weights.includes(tabs[idx].filter)
        ? $filtersStore.weights.filter((num) => num !== tabs[idx].filter)
        : [...$filtersStore.weights, tabs[idx].filter]
    })

    if (activeTabs.includes(idx)) {
      setActiveTabs(activeTabs.filter((num) => num !== idx))
    } else {
      setActiveTabs([...activeTabs, idx])
    }
  }

  return (
    <section className="catalog-tabs">
      <div className="container">
        <h1 className="catalog-tabs__title">Каталог техники</h1>
        <div className="catalog-tabs__items">
          {tabs.slice(0, itemsToShow).map(({ filter, text }, idx) => 
            <button 
              className={`catalog-tabs__item ${activeTabs.includes(idx) ? 'pressed' : ''}`} 
              data-filter={filter} 
              key={filter} 
              onClick={onTabClick.bind(null, idx)}
            >
              {text}
            </button>
          )}
        </div>
        <button 
          className="catalog-tabs__more rel after" 
          onClick={onShowMore}
        >
          {itemsToShow === tabs.length ? 'скрыть' : 'ещё'}
        </button>
      </div>
    </section>
  )
}

export default CatalogTabs
