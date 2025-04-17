import React, { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Default from './layout/Default'
import NotFound from './pages/NotFound'

const MainPage = lazy(() => import('./pages/MainPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ShopPage = lazy(() => import('./pages/ShopPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const CartPage = lazy(() => import('./pages/CartPage'))

import DetailPage from './pages/DetailPage'
import { detailPageLoader } from './loaders/productsLoaders'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <MainPage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/cart', element: <CartPage /> },
      {
        path: '/detail/:productId',
        element: <DetailPage />,
        loader: detailPageLoader,
      },
    ],
  },
])
export default router
