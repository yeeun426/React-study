import React, { lazy } from 'react'

import LatestList from '../organism/LatestList'
const HeroSlider = lazy(() => import('../organism/HeroSlider'))

const MainPage = () => {
  return (
    <main>
      <h2 hidden>MainPage</h2>
      <HeroSlider />
      <LatestList />
    </main>
  )
}

export default MainPage
