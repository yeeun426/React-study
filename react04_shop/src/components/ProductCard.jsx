import React from 'react'
import { Link } from 'react-router-dom'
import css from './ProductCard.module.css'

const ProductCard = ({ product }) => {
  return (
    <div className={css.card}>
      <div className={css.imgWrap}>
        <img src={`/public/img/${product.img}`} alt={product.title} />
        <span className={css.cate}>{product.category}</span>
        {product.discount > 0 && <span className={css.discount}>{product.discount}%</span>}
      </div>
      <div className={css.textWrap}>
        <strong className={css.title}>{product.title}</strong>
        <span className={css.price}>{product.price.toLocaleString()}원</span>
      </div>
      <Link to={`./detail/${product.id}`} className={css.btnGnDetail}>
        상품 상세 페이지
      </Link>
    </div>
  )
}

export default ProductCard
