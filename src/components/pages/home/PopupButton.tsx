import { useStore } from '@nanostores/react'
import modalsStore from '../../../store/modals'

const PopupButton = () => {
  const $modalsStore = useStore(modalsStore);

  const handleOpenPopup = () => {
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
      className="guarantee__btn btn" 
      onClick={handleOpenPopup}
    >
      Заказать звонок
    </button>
  )
}
export default PopupButton
