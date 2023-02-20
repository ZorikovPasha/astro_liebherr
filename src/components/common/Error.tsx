const Error = () => {
  return (
    <div className="error">
      <div className="error__images flex">
        <img 
          className="error__img" 
          src="/images/error.jpg" 
          alt="error" 
        />
      </div>
      <p className="error__text">Что-то пошло не так.. Попробуйте снова</p>
    </div>
  )
}

export default Error
