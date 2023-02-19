import { useStore } from '@nanostores/react'
import modalsStore from '../../store/modals'

interface IPopupMessageProps {
  title: string
  text: string
  buttonText: string
}

const PopupSuccess: React.FC<IPopupMessageProps> = ({ 
  title, 
  text, 
  buttonText 
}) => {
  const $modalsStore = useStore(modalsStore);

  const onClose = () => {
    modalsStore.set({
      opened: {
        ...$modalsStore.opened,
        message: false
      }
    })
    document.body.classList.remove('lock')
  }

  return $modalsStore.opened.message ? (
    <div className="popup-message">
      <div className="popup-message__body">
        <button 
          className="popup-message__close" 
          onClick={onClose}
        >
          <img 
            src="/static/images/close.svg" 
            alt="close icon" 
          />
        </button>
        <h3 className="popup-message__title">{title}</h3>
        <p className="popup-message__text">{text}</p>
        <button 
          className="popup-message__btn" 
          onClick={onClose}
        >
          {buttonText}
        </button>
      </div>
    </div>
  ) : null
}

export default PopupSuccess
