import { createBrowserRouter } from 'react-router-dom'
import Default from './layout/Default'
import MainPAge from './pages/MainPAge'
import AboutPage from './pages/AboutPage'
import ShopPage from './pages/ShopPage'
import BlogPage from './pages/BlogPage'
import CartPage from './pages/CartPage'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <MainPAge /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/cart', element: <CartPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
export default router
