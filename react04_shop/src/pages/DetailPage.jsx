import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import css from './DetailPage.module.css'

import DetailTabInfo from '@/organism/DetailTabInfo'
import SimilarProducts from '@/organism/SimilarProducts'
import Modal from '@/components/Modal'

const DetailPage = () => {
  const { product, relatedProducts } = useLoaderData()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [count, setCount] = useState(1)

  const decrease = () => {
    setCount(prev => (prev > 1 ? prev - 1 : 1))
  }
  const increase = () => {
    setCount(prev => prev + 1)
  }

  const handleAddToCart = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
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
              <button onClick={decrease}>-</button>
              <span>{count}</span>
              <button onClick={increase}>+</button>
            </div>
            <button className={css.addBtn} onClick={handleAddToCart}>
              장바구니 담기
            </button>
          </div>
        </div>
      </div>
      <DetailTabInfo />
      <SimilarProducts relatedProducts={relatedProducts} />
      {isModalOpen && <Modal product={product} count={count} onClose={closeModal} />}
    </main>
  )
}

export default DetailPage
