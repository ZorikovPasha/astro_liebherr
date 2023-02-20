import React from 'react'
import Select, { ActionMeta, SingleValue } from 'react-select'
import filtersStore from '../../../store/filters'
import { useStore } from '@nanostores/react'

interface ICOntrolsProps {
  activeView: 'grid' | 'list'
  onAsideOpen: React.MutableRefObject<(() => void) | null>
  setActiveView: React.Dispatch<React.SetStateAction<'grid' | 'list'>>
}

type onSortChangeType = (
  newValue: SingleValue<{
    value: string
    label: string
  }>,
  actionMeta: ActionMeta<{
    value: string
    label: string
  }>,
) => void

const FilterControls = React.forwardRef<HTMLButtonElement, ICOntrolsProps>(({ onAsideOpen, setActiveView, activeView }, asideBtnRef) => {
  const $filtersStore = useStore(filtersStore)

  const onToggleASide = () => {
    onAsideOpen?.current && onAsideOpen.current()
  }

  const sortOptions = [
    { value: 'maxHeight:', label: 'По высоте' },
    { value: 'liftingCapacity:', label: 'По грузоподъемности' },
    { value: 'arrowLength:', label: 'По длине' },
  ]

  const [activeSortType, setActiveSortType] = React.useState<
    SingleValue<{
      value: string
      label: string
    }>
  >(sortOptions[0])

  const onSortTypeChange: onSortChangeType = (value) => {
    setActiveSortType(value)

    if (value?.value) {
      filtersStore.set({
        ...$filtersStore, 
        sort: value.value
      })
    }
  }

  const onChangeViewGrid = () => {
    setActiveView('grid')
  }

  const onChangeViewList = () => {
    setActiveView('list')
  }

  return (
    <div className="catalog-content__controls catalog-controls rel flex aic jcsb">
      <div className="catalog-controls__aside-toggle aside-toggle">
        <button 
          className="aside-toggle__btn" 
          onClick={onToggleASide} 
          ref={asideBtnRef}
        >
          <img 
            src="/images/aside-toggle.svg" 
            alt="toggle" 
          />
        </button>
      </div>
      <div className="flex aic">
        <img 
          src="/images/sort-icon.svg" 
          alt="" 
        />
        <Select 
          value={activeSortType} 
          className="catalog-controls__sort-select" 
          options={sortOptions} 
          onChange={onSortTypeChange} 
        />
      </div>
      <div className="catalog-controls__view view flex aic">
        <button 
          onClick={onChangeViewGrid} 
          className={`catalog-controls__btn view__btn-grid ${activeView === 'grid' ? 'catalog-controls__btn--active' : ''}`}
        >
          <img 
            src="/images/view-grid.svg" 
            alt="сетка иконка" 
          />
        </button>
        <button 
          onClick={onChangeViewList} 
          className={`catalog-controls__btn view__btn-list ${activeView === 'list' ? 'catalog-controls__btn--active' : ''}`}
        >
          <img 
            src="/images/view-list.svg" 
            alt="список иконка" 
          />
        </button>
      </div>
    </div>
  )
})

export default FilterControls
