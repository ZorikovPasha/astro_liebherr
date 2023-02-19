import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentChunk, selectTotal } from '../../../store/selectors'
import { fetchProducts } from '../../../store/slices/productsSlice'

const Pagination: React.FC<{ query: React.MutableRefObject<string> }> = ({ query }) => {
  const dispatch = useDispatch()
  const productsCount = useSelector(selectTotal) ?? 0
  let currentChunk = useSelector(selectCurrentChunk)

  const ITEMS_PER_PAGE = 10
  const pagesCount = Math.ceil(productsCount / ITEMS_PER_PAGE)

  const pages = [...Array(pagesCount)].map((_, i) => i + 1)

  const between = React.useRef(pages.length > 5 ? { left: 2, right: pages.length - 2 } : pages.length === 5 ? { left: 2, right: 4 } : null)

  const betWeenLength = React.useRef(pages.length > 5 ? pages.length - 4 : pages.length === 5 ? 1 : 0)

  const handleQuery = (chunk: number) => {
    const params = query.current.split('&')

    params[params.length - 1] = `${query.current ? '' : '?'}chunk=${chunk}`
    const q = params.join('&')

    if (query.current) {
      query.current = q
    }

    return q
  }

  const onPrevPage = () => {
    if (currentChunk > 0) {
      if (between.current && between.current.right + 1 === currentChunk && between.current.left !== between.current.right) {
        between.current.right -= 1
      }

      dispatch(fetchProducts(handleQuery(--currentChunk)))
    }
  }

  const onNextPage = () => {
    if (currentChunk < pagesCount) {
      if (between.current && between.current.left === currentChunk && between.current.left !== between.current.right) {
        between.current.left += 1
      }

      dispatch(fetchProducts(handleQuery(++currentChunk)))
    }
  }

  const onPageChange = (num: number) => dispatch(fetchProducts(handleQuery(num)))

  return (
    <div className="pagination flex aic">
      <button className="pagination__arrow" disabled={currentChunk <= 1} onClick={onPrevPage}>
        <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64644L3.82843 0.464464C4.02369 0.269202 4.34027 0.269202 4.53553 0.464464C4.7308 0.659726 4.7308 0.976308 4.53553 1.17157L1.70711 4L4.53553 6.82842C4.73079 7.02369 4.73079 7.34027 4.53553 7.53553C4.34027 7.73079 4.02369 7.73079 3.82843 7.53553L0.646446 4.35355ZM31 4.5L0.999998 4.5L0.999998 3.5L31 3.5L31 4.5Z"
            fill="#535554"
          />
        </svg>
      </button>
      <ul className="pagination__list flex">
        {pages.slice(0, between.current?.left || 2).map((num) => (
          <li key={num} className={`pagination__item flex aic jcc ${currentChunk === num ? 'pagination__item--active' : ''}`} onClick={onPageChange.bind(null, num)}>
            <span className="pagination__link">{num}</span>
          </li>
        ))}
        {betWeenLength && between?.current && between.current.left !== pages.length && between.current.left !== between.current.right && (
          <li className="pagination__item flex aic jcc pagination__item--dots flex">
            <span></span>
            <span></span>
            <span></span>
          </li>
        )}
        {pages.slice((betWeenLength?.current && between?.current && between.current.right) || pages.length - 3).map((num) => (
          <li key={num} className={`pagination__item aic flex jcc ${currentChunk === num ? 'pagination__item--active' : ''}`} onClick={onPageChange.bind(null, num)}>
            <span className="pagination__link">{num}</span>
          </li>
        ))}
      </ul>
      <button className="pagination__arrow" disabled={currentChunk >= pagesCount} onClick={onNextPage}>
        <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64644L27.1716 0.464464C26.9763 0.269202 26.6597 0.269202 26.4645 0.464464C26.2692 0.659726 26.2692 0.976308 26.4645 1.17157L29.2929 4L26.4645 6.82842C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.73079 26.9763 7.73079 27.1716 7.53553L30.3536 4.35355ZM4.37114e-08 4.5L30 4.5L30 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
            fill="#535554"
          />
        </svg>
      </button>
    </div>
  )
}

export default Pagination
