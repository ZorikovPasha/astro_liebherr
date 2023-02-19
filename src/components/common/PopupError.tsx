import React from 'react'
import modalsStore from '../../store/modals'
import { useStore } from '@nanostores/react'

const PopupError: React.FC = () => {
  const $modalsStore = useStore(modalsStore);

  const onClose = () => {
    modalsStore.set({
      opened: {
        ...$modalsStore.opened,
        error: false
      }
    })
    document.documentElement.classList.remove('lock')
  }

  return $modalsStore.opened.error 
    ? <div className="popup">
      <div className="popup__body">
        <button 
          className="popup__close" 
          onClick={onClose}
        >
          <img 
            src="/static/images/close.svg" 
            alt="close" 
            width={24} 
            height={24} 
          />
        </button>
        <h3 className="popup__title">Что-то пошло не так..</h3>
        <p className="popup__text">Пожалуйста, повторите попытку</p>
        <button 
          className="popup-message__btn" 
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>
    : null
}

export default PopupError
