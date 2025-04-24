import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
  const countData = useSelector(state => state.counter) // ✅ reducer에서 설정한 키에 맞춤
  console.log(countData)
  const { count, label } = countData

  return (
    <p>
      {label} : {count}
    </p>
  )
}

export default Counter
