import React from 'react'
import { useLoaderData } from 'react-router-dom'
import css from './DetailPage.module.css'

const DetailPage = () => {
  const { product, relatedProducts } = useLoaderData()

  return (
    <main>
      <h2>DetailPage</h2>
      <div className={css.detailCon}>
        <div className={css.imgWrap}>
          <img src={`/public/img/${product.img}`} alt="상품" />
          {product.discount > 0 && <p className={css.discount}>{product.discount}%</p>}
        </div>
        <div className={css.infoWrap}>
          <p className={css.title}>{product.title}</p>
          <p className={css.price}>{product.price.toLocaleString()}원</p>
          <p className={css.category}>{product.category}</p>
          <div className={css.btnWrap}>
            <div className={css.counterArea}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className={css.addBtn}>장바구니 담기</button>
          </div>
        </div>
      </div>
      <div>탭메뉴</div>
      <div>관련상품 들어가는 곳</div>
    </main>
  )
}

export default DetailPage
