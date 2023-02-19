import React from 'react'
import { useStore } from '@nanostores/react';
import { publicApi } from '../../api'
import AppTextField from './AppTextfield'
import loaderStore from '../../store/loaderStore'
import modalsStore from '../../store/modals';
import productsStore from '../../store/products';

type fieldsType = {
  fields: {
    name: {
      inputClass: string
      type: string
      placeholder: string
      labelClass: string
      blockClass?: string
      tag: string
      value: string
      mask?: string
      isValid: boolean
      errorMessage: string
      validateFn: (s: string) => boolean
    }
    phone?: {
      inputClass: string
      type: string
      placeholder: string
      labelClass: string
      blockClass?: string
      tag: string
      mask?: string
      value: string
      isValid: boolean
      errorMessage: string
      validateFn: (s: string) => boolean
    }
    email?: {
      inputClass: string
      type: string
      placeholder: string
      labelClass: string
      blockClass?: string
      tag: string
      mask?: string
      value: string
      isValid: boolean
      errorMessage: string
      validateFn: (s: string) => boolean
    }
    message?: {
      inputClass: string
      type: string
      placeholder: string
      labelClass: string
      blockClass?: string
      tag: string
      mask?: string
      value: string
      isValid: boolean
      errorMessage: string
      validateFn: (s: string) => boolean
    }
  }
  isAgree: boolean
}

type AppFormPropsType = {
  fields: fieldsType
  buttonClass: string
  buttonText: string
  formClass: string
  agreeLabelClass?: string
  isOrder?: boolean
}

export const AppForm: React.FC<AppFormPropsType> = ({ 
  fields, 
  buttonClass = '', 
  buttonText="", 
  formClass = '',
  agreeLabelClass = 'popup__label flex form-label', 
  isOrder = false 
}) => {
  const [showErrors, setShowErrors] = React.useState(false)
  const [state, setState] = React.useState(fields)

  const $modalsStore = useStore(modalsStore);
  const $productsStore = useStore(productsStore);

  const id = parseInt(new URLSearchParams(document.location.search).get("id") ?? "")

  const desiredProduct = $productsStore.items.find(p => p.id === id)

  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value, name } }) =>
    setState((prev) => ({
      ...prev,
      fields: {
        ...prev.fields,
        [name]: {
          ...prev.fields[name as keyof typeof state.fields],
          value,
          isValid: prev.fields[name as keyof typeof state.fields]?.validateFn(value),
        },
      },
    }))

  const onAgree = () => setState((prev) => ({
    ...prev,
    isAgree: !prev.isAgree,
  }))

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setShowErrors(true)

    let isValid = true;
    (Object.keys(state.fields) as Array<keyof typeof state.fields>).map((key: keyof typeof state.fields) => {
      if (!state.fields[key]?.isValid) {
        isValid = false
      }
    })

    if (!isValid || !state.isAgree) {
      return
    }

    const dto = {} as { [key in keyof typeof state.fields | 'id']: string }

    (Object.keys(state.fields) as Array<keyof typeof state.fields>).map((key: keyof typeof state.fields) => {
      dto[key] = state.fields[key]?.value ?? ''
    })

    if (isOrder && desiredProduct?._id) {
      dto.id = desiredProduct._id
    }
    loaderStore.set({ isShown: true })

    const res = await (isOrder ? publicApi.makeOrder(dto) : publicApi.sendRequest(dto))

    loaderStore.set({ isShown: false })

    if (res?.success) {
      modalsStore.set({
        opened: {
          ...$modalsStore.opened,
          message: true,
          ...(isOrder 
              ? { order: false }
              : { request: false }
            )
        }
      });
      
      (Object.keys(state.fields) as Array<keyof typeof state.fields>).forEach((key) => {
        if (key in state.fields) {
          //@ts-ignore
          state.fields[key].value = ''
          //@ts-ignore
          state.fields[key].isValid = false
        }
      })
      setState({ ...state })
    } else {

      modalsStore.set({
        opened: {
          ...$modalsStore.opened,
          error: true,
        }
      })
      document.documentElement.classList.add('lock')
    }
  }

  return (
    <form className={formClass} onSubmit={handleSubmit}>
      {Object.entries(state.fields).map(([name, { value, isValid, tag, labelClass, placeholder, type, mask, inputClass, blockClass, errorMessage }]) => (
        <AppTextField
          value={value}
          key={name}
          tag={tag}
          blockClass={blockClass}
          name={name}
          hasError={showErrors && !isValid}
          type={type}
          mask={mask}
          placeholder={placeholder}
          labelClass={labelClass}
          inputClass={inputClass}
          errorMessage={errorMessage}
          handleChange={onChange}
        />
      ))}

      <label className={agreeLabelClass}>
        <input 
          name="isAgree" 
          className="form-label__checkbox-real" 
          type="checkbox" 
          checked={state.isAgree} 
          onChange={onAgree} 
        />
        <span className={`form-label__checkbox-fake rel ${showErrors && !state.isAgree ? 'form-label__checkbox-fake--error' : ''}`} />
        <span className="form-label__text">
          Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
        </span>
      </label>

      <button 
        className={buttonClass} 
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  )
}
