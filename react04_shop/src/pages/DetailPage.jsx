import React from 'react'
import { useLoaderData } from 'react-router-dom'
import css from './DetailPage.module.css'
import ProductCard from '@/components/ProductCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

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
      <div className={css.tabCon}>
        <ul className="nav nav-underline mb-3" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Description
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Adtional information
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Reviews(0)
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            aria-labelledby="pills-home-tab"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a
            volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed
            quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi
            porta tempor odio, in molestie diam bibendum sed.{' '}
          </div>
          <div className="tab-pane fade" id="pills-profile" aria-labelledby="pills-profile-tab">
            Adtional information
          </div>
          <div className="tab-pane fade" id="pills-contact" aria-labelledby="pills-contact-tab">
            Reviews(0)
          </div>
        </div>
      </div>
      <div className={css.similarCon}>
        <h3>Similar Items</h3>
        <Swiper
          slidesPerView={3}
          pagination={true}
          spaceBetween={20}
          modules={[Pagination]}
          className={css.mainSlider}
        >
          <div className={css.similarArea}>
            {relatedProducts.map(product => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </main>
  )
}

export default DetailPage
