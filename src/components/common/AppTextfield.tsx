import React from 'react'
import InputMask from 'react-input-mask'

type AppTextFieldType = {
  blockClass?: string
  name: string
  type: string
  value: string
  placeholder: string
  labelClass: string
  inputClass: string
  hasError: boolean
  errorMessage: string
  tag: string
  mask?: string
  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const AppTextField: React.FC<AppTextFieldType> = ({
  blockClass,
  tag,
  name,
  hasError,
  errorMessage,
  type,
  value,
  mask = '',
  placeholder,
  labelClass,
  inputClass,
  handleChange
}) => {
  return (
    <div className={blockClass}>
      <label htmlFor={name} className={labelClass}>
        {tag === 'input'
          ? mask 
            ? <InputMask
              value={value}
              name={name}
              mask={mask}
              maskChar="_"
              className={`${inputClass} ${hasError ? 'form-input--error' : ''}`}
              type={type}
              placeholder={placeholder}
              onChange={handleChange}
            />
            : <input
                value={value}
                name={name}
                className={`${inputClass} ${hasError ? 'form-input--error' : ''}`}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
              />
           : <textarea
              value={value}
              name={name}
              className={`${inputClass} ${hasError ? 'form-input--error' : ''}`}
              placeholder={placeholder}
              onChange={handleChange}
            />
        }
      </label>
      {hasError && <p className="questions__form-message">{errorMessage?.toString()}</p>}
    </div>
  )
}

export default AppTextField
