import React from 'react'
import loaderStore from '../../store/loaderStore'
import { useStore } from '@nanostores/react'

const Loader: React.FC = () => {
  const $loaderStore = useStore(loaderStore)

  return $loaderStore.isShown
    ?  <div className="loader flex aic">
      <div className="dots"></div>
    </div>
    : null
}

export default Loader
