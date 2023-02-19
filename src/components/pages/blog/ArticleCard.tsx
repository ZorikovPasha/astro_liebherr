import { ROUTES } from '../../../utils/const'

interface Props {
  preview: string
  title: string
  subtitle: string
  id: number
}

const ArticleCard: React.FC<Props> = ({ preview, title, subtitle, id }) => {
  return (
    <div className="blog__item item-blog">
      <div className="blog__item-inner flex">
        <div className="item-blog__images">
          <img 
            src={preview} 
            width="100%" 
            height="100%" 
            alt="Статья о строительной технике" 
          />
        </div>
        <div className="item-blog__box flex">
          <h6 className="item-blog__title">{title}</h6>
          <p className="item-blog__text">
            {subtitle}
          </p>
          <a 
            className="item-blog__btn btn" 
            href={ROUTES.ARTICLES + id}
          >
            Подробнее
          </a>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
