import React, { useState } from 'react'

const App = () => {
  const [age, setAge] = useState(10)

  const increment = num => {
    setAge(prev => prev + num) // 기존값 기억하면서 업데이트
    setAge(age + num) // 기존 값 업데이트
  }

  return (
    <div>
      <h1>연습</h1>
      <button onClick={() => increment(3)}>+3</button>
      <button onClick={() => increment(1)}>+1</button>
      <h2>입력값 : {age}</h2>
    </div>
  )
}

export default App
