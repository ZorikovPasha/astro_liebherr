import { useStore } from '@nanostores/react';
import React from 'react'
import modalsStore from '../../store/modals'

const Button: React.FC = () => {
  const $modalsStore = useStore(modalsStore);
  
  const onOpenPopup = () => {
    modalsStore.set({
      opened: {
        ...$modalsStore.opened,
        request: true
      }
    })
    document.documentElement.classList.add('lock')
  }

  return (
    <button 
      className="footer__btn" 
      onClick={onOpenPopup}
    >
      Свяжитесь со мной
    </button>
  )
}

export default Button
