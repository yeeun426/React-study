import React, { useState } from 'react'

const InputFiled = ({ setData }) => {
  const [inputText, setInputText] = useState('')

  const inputItem = e => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }
  const addItem = () => {
    // if (inputText.trim() === '') {
    //   alert('여행지를 입력하세요')
    //   document.querySelector('input').focus()
    //   return
    // } else if (inputText.trim().length < 2) {
    //   alert('2자 이상으로 입력하세요')
    //   document.querySelector('input').focus()
    //   return
    // }

    if (inputText.trim().length < 2) {
      alert(inputText.trim() == '' ? '여행지를 입력하세요' : '2자 이상으로 입력하세요')
      document.querySelector('input').focus()
      return
    }

    setData(prev => {
      const newData = [...prev, inputText]
      localStorage.setItem('trip', JSON.stringify(newData))
      return newData
    })
    setInputText('')
    document.querySelector('input').focus()
  }

  const handleKeyup = e => {
    if (e.key === 'Enter') addItem()
  }

  return (
    <div className="inputFild mw">
      <input
        placeholder="여행지를 입력하세요"
        type="text"
        value={inputText}
        onChange={inputItem}
        onKeyUp={handleKeyup}
      />
      <button onClick={addItem}>입력</button>
    </div>
  )
}

export default InputFiled
