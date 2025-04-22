import React, { useState } from 'react'
import css from './ShopPage.module.css'
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import Pagination from '@/components/Pagination'

const ShopPage = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isDown, setIsDown] = useState(false)
  const initProductsData = useLoaderData()
  const currentCategory = searchParams.get('category')
  const sortCase = searchParams.get('_sort')

  const data = initProductsData.products.data
  const { per_page } = initProductsData
  console.log(searchParams)
  console.log(setSearchParams)
  const handleCategoryFilter = category => {
    const params = new URLSearchParams(searchParams) // 현재 파라미터 정보 유지
    params.set('_page', 1) // 페이지를 1로 초기화
    params.set('_per_page', per_page) // 페이지당 상품 수를 설정
    category ? params.set('category', category) : params.delete('category') // 카테고리 필터링
    navigate(`/shop/?${params}`) // URL 변경
  }

  const handleSort = sortOption => {
    const params = new URLSearchParams(searchParams)
    params.set('_page', 1)
    params.set('_sort', sortOption)
    setIsDown(false)
    navigate(`/shop/?${params}`)
  }

  const sortTextMap = {
    id: '등록순',
    price: '낮은 가격순',
    '-price': '높은 가격순',
    discount: '낮은 할인순',
    '-discount': '높은 할인순',
  }

  const getSortText = () => {
    return sortTextMap[sortCase] || '등록순'
  }

  return (
    <main className={css.shopPage}>
      <h2>Shop All</h2>
      <div className={css.searchFn}>
        <div className={css.category}>
          <button
            onClick={() => {
              handleCategoryFilter('')
            }}
            className={currentCategory === null ? css.active : ''}
          >
            전체상품
          </button>
          <button
            onClick={() => {
              handleCategoryFilter('new')
            }}
            className={currentCategory === 'new' ? css.active : ''}
          >
            신상품(new)
          </button>
          <button
            onClick={() => {
              handleCategoryFilter('top')
            }}
            className={currentCategory === 'top' ? css.active : ''}
          >
            인기상품(top)
          </button>
        </div>
        <div className={`${css.sort} ${isDown ? css.active : ''}`}>
          <div className={css.sortHeader} onClick={() => setIsDown(!isDown)}>
            <p>{getSortText()}</p>
            <i className={`bi bi-chevron-${isDown ? 'up' : 'down'}`}></i>
          </div>
          <ul>
            <li
              onClick={() => {
                handleSort('id')
              }}
              className={sortCase === 'id' ? css.active : ''}
            >
              등록순
            </li>
            <li
              onClick={() => {
                handleSort('price')
              }}
              className={sortCase === 'price' ? css.active : ''}
            >
              낮은 가격순
            </li>
            <li
              onClick={() => {
                handleSort('-price')
              }}
              className={sortCase === '-price' ? css.active : ''}
            >
              높은 가격순
            </li>
            <li
              onClick={() => {
                handleSort('discount')
              }}
              className={sortCase === 'discount' ? css.active : ''}
            >
              낮은 할인순
            </li>
            <li
              onClick={() => {
                handleSort('-discount')
              }}
              className={sortCase === '-discount' ? css.active : ''}
            >
              높은 할인순
            </li>
          </ul>
        </div>
      </div>
      <div className={css.productList}>
        <ul className={css.list}>
          {data.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        <Pagination initProductsData={initProductsData} />
      </div>
    </main>
  )
}

export default ShopPage
