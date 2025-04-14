// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'

// Bootstrap CSS 가져오기
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Icons 가져오기
import 'bootstrap-icons/font/bootstrap-icons.css'
// Bootstrap JavaScript 가져오기
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// 기존 CSS 파일
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
