import React from 'react';
import { publicApi } from '../../../api';
import loaderStore from '../../../store/loaderStore';
import { ArticleType } from '../../../types/dataTypes';
import Error from '../../common/Error';
import ArticleCard from '../blog/ArticleCard';

interface IBlogProps {
  items: ArticleType[]
  hasMore: boolean
}

const Items: React.FC<IBlogProps> = ({ items, hasMore }) => {
  const activeChunkIdx = React.useRef(1)
  const showMoreRef = React.useRef(hasMore)

  const [_, setArticles] = React.useState(items)
  const [isError, setError] = React.useState(false)

  const onLoadMore = () => {
    loaderStore.set({ isShown: true })

    publicApi.getArticles(activeChunkIdx.current + 1).then((data) => {
      activeChunkIdx.current += 1
      showMoreRef.current = data.hasMore
      setArticles(data.items)
      setError(false)
      loaderStore.set({ isShown: false })
    }).catch(() => setError(true))
  }
  return (
    <>
      {isError 
        ? <Error />
        : <div className="blog__items rel">
          {_?.map(({ id, title, subtitle, preview }) => 
            <ArticleCard 
              key={id} 
              id={id} 
              title={title} 
              subtitle={subtitle} 
              preview={preview.replace("/static", "")} 
            />
          )}
        </div>
      }
      {showMoreRef.current && 
        <div className="blog__btn-wrapper">
          <button 
            className="blog__btn" 
            onClick={onLoadMore}
          >
            Загрузить ещё
          </button>
        </div>
      }
    </>
  )
}

export default Items
