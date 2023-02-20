import { ROUTES } from '../../../utils/const'

interface Props {
  id: number
  name: string
  imgSrc: string
  liftingCapacity: number
  arrowLength: number
  rootElClass?: string
}

const CatalogCard: React.FC<Props> = ({ 
  id, 
  imgSrc, 
  name, 
  liftingCapacity, 
  arrowLength, 
  rootElClass = '' 
}) => {
  return (
    <div className={`product-item flex ${rootElClass}`}>
      <div className="product-item__body flex">
        <div className="product-item__images">
          <img 
            src={imgSrc} 
            width="100%" 
            className="product-item__img" 
            height="100%" 
            alt="product" 
          />
        </div>
        <div className="product-item__title-box rel after before">
          <a 
            className="product-item__title product-item__title--big" 
            href={ROUTES.CATALOG + id}
          >
            {name}
          </a>
        </div>
        <div className="product-item__info flex">
          <div className="product-item__box">
            <div className="product-item__text">Грузоподъемность:</div>
            <div className="product-item__text">{liftingCapacity}</div>
            <div className="product-item__text">Длина стрелы:</div>
            <div className="product-item__text">{arrowLength}</div>
          </div>
          <a 
            className="product-item__link rel after" 
            href={ROUTES.CATALOG + id}
          >
            Все характеристики
          </a>
          <a 
            className="product-item__link rel after" 
            href={ROUTES.CONTACTS}
          >
            Арендовать
          </a>
        </div>
      </div>
    </div>
  )
}

export default CatalogCard
