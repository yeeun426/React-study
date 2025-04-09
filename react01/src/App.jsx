import React, { useState } from 'react'
import css from './sample.module.css'
const App = () => {
  const [userInfo, setUserInfo] = useState({
    userName: 'yeeun',
    artwork: {
      title: '이미지 제목',
      artist: '예응',
      imgUrl: 'https://picsum.photos/id/1/500/300',
    },
  })

  const handleNameChange = e => {
    setUserInfo({
      ...userInfo,
      userName: e.target.value,
    })
  }

  const handleTitleChange = e => {
    setUserInfo({
      ...userInfo,
      artwork: {
        ...userInfo.artwork,
        title: e.target.value,
      },
    })
  }

  const handleArtistChange = e => {
    setUserInfo({
      ...userInfo,
      artwork: {
        ...userInfo.artwork,
        artist: e.target.value,
      },
    })
  }

  const handleImgChange = e => {
    setUserInfo({
      ...userInfo,
      artwork: {
        ...userInfo.artwork,
        imgUrl: e.target.value,
      },
    })
  }

  return (
    <>
      <div className="app3">
        <h1>연습2</h1>
        <label htmlFor="userName">이름</label>
        <input type="text" id="userName" value={userInfo.userName} onChange={handleNameChange} />
        <label htmlFor="imgTitle">이미지제목</label>
        <input
          type="text"
          id="imgTitle"
          value={userInfo.artwork.title}
          onChange={handleTitleChange}
        />
        <label htmlFor="artist">작가</label>
        <input
          type="text"
          id="artist"
          value={userInfo.artwork.artist}
          onChange={handleArtistChange}
        />
        <label htmlFor="imgUrl">이미지정보</label>
        <input type="text" id="imgUrl" value={userInfo.artwork.imgUrl} onChange={handleImgChange} />
      </div>

      <div className={`${css.imgCon} mw`}>
        <p>{userInfo.artwork.title}</p>
        <p>{userInfo.artwork.artist}</p>
        <img src={userInfo.artwork.imgUrl} alt={userInfo.artwork.title} />
      </div>
    </>
  )
}

export default App
