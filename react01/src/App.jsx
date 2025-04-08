import React, { useState } from 'react'
import Header from './components/Header'
import InputFiled from './components/InputFiled'
import PostList from './components/PostList'

const App = () => {
  const list = ['송도', '인천', '서울', '부산', '대구', '대전', '광주']
  const [data, setData] = useState(list)

  return (
    <>
      <Header />
      <InputFiled />
      <PostList data={data} />
    </>
  )
}

export default App
