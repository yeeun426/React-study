import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Pagination } from 'swiper/modules'
import css from './HeroSlider.module.css'
import { Link } from 'react-router-dom'

import { getBannerData } from '../api/bannerApi'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const HeroSlider = () => {
  const [banner, setBanner] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const preloadFirstImage = () => {
      const img = new Image()
      img.src = 'public/vite.svg'
    }

    preloadFirstImage()

    const fetchBanner = async () => {
      try {
        setLoading(true)
        const data = await getBannerData()

        await delay(3000) // 1초 지연

        setBanner(data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchBanner()
  }, [])

  return (
    <section>
      <h2 hidden>Banner Event</h2>
      <Swiper pagination={true} modules={[Pagination]} className={css.mainSlider}>
        {loading ? (
          <SwiperSlide>
            <div className={`${css.skletion} ${css.imgWrap}`}></div>
          </SwiperSlide>
        ) : (
          banner.map(item => (
            <SwiperSlide key={item.id}>
              <div className={css.imgWrap}>
                <img src={item.img} alt={item.title} />
              </div>
              <div className={css.textWrap}>
                <p className={css.title}>{item.title}</p>
                <p className={css.desc}>{item.description}</p>
                <Link to={'./shop'} className={css.more}>
                  View Product
                </Link>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </section>
  )
}

export default HeroSlider
