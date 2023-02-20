import React from 'react'
import { REGEX } from '../../utils/const'
import { AppForm } from './AppForm'
import modalsStore from '../../store/modals'
import { useStore } from '@nanostores/react'

const PopupRequest: React.FC = () => {
  const $modalsStore = useStore(modalsStore);

  const fields = React.useRef({
    fields: {
      name: {
        value: '',
        isValid: false,
        inputClass: 'popup__input',
        type: 'text',
        placeholder: 'Ваше имя',
        labelClass: 'popup__label flex form-label',
        tag: 'input',
        errorMessage: 'Поле не заполнено',
        validateFn: (str: string) => str.length > 0,
      },
      phone: {
        value: '',
        isValid: false,
        inputClass: 'popup__input',
        type: 'tel',
        placeholder: '+7__________',
        labelClass: 'popup__label flex form-label',
        mask: '+79999999999',
        tag: 'input',
        errorMessage: 'Поле заполнено некорректно',
        validateFn: (str: string) => !str.includes('_'),
      },
      email: {
        value: '',
        isValid: false,
        inputClass: 'popup__input',
        type: 'text',
        placeholder: 'Ваша почта',
        labelClass: 'popup__label flex form-label',
        tag: 'input',
        errorMessage: 'Поле заполнено некорректно',
        validateFn: (str: string) => REGEX.email.test(str),
      },
    },
    isAgree: false,
  })

  const onClose = () => {
    document.documentElement.classList.remove('lock')
    if ($modalsStore.opened.request) {
      modalsStore.set({
        opened: {
          ...$modalsStore.opened,
          request: false
        }
      })
    }
    if ($modalsStore.opened.order) {
      modalsStore.set({
        opened: {
          ...$modalsStore.opened,
          order: false
        }
      })
    }
  }

  return $modalsStore.opened.order || $modalsStore.opened.request 
    ? <div className="popup">
      <div className="popup__body">
        <button 
          className="popup__close" 
          onClick={onClose}
        >
          <img 
            src="/images/close.svg" 
            alt="close" 
            width={24} 
            height={24} 
          />
        </button>
        <h3 className="popup__title">Арендовать спецтехнику</h3>
        <p className="popup__text">Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время</p>

        <AppForm 
          formClass="popup__form" 
          fields={fields.current} 
          buttonClass="popup__btn btn" 
          buttonText="Оставить заявку" 
          isOrder={$modalsStore.opened.order} 
        />
      </div>
    </div>
    : null
}

export default PopupRequest
