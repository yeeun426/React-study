import React, { useState } from 'react'
import Header from './components/Header'
import InputFiled from './components/InputFiled'
import PostList from './components/PostList'
import NoList from './components/NoList'
import './index.css'

const App = () => {
  // const list = ['송도', '인천', '서울', '부산', '대구', '대전', '광주']
  const list = JSON.parse(localStorage.getItem('trip')) || []
  const [data, setData] = useState(list)

  return (
    <>
      <Header />
      <InputFiled setData={setData} />
      {data.length === 0 ? <NoList /> : <PostList data={data} setData={setData} />}
    </>
  )
}

export default App
