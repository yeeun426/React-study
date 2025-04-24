import React from 'react'
import Counter from '@/components/Counter'
import { decrement, increment, reset } from '@/store/counterSlice'
import { useDispatch } from 'react-redux'

const BlogPage = () => {
  const dispatch = useDispatch()

  const increase = (num = 1) => {
    dispatch(increment(num))
  }
  const decrease = () => {
    dispatch(decrement())
  }
  const restart = () => {
    dispatch(reset())
  }
  return (
    <main>
      <h2>BlogPage</h2>
      <Counter />
      <Counter />
      <Counter />
      <button
        onClick={() => {
          increase()
        }}
      >
        증가하기
      </button>
      <button
        onClick={() => {
          decrease()
        }}
      >
        감소하기
      </button>
      <button
        onClick={() => {
          restart()
        }}
      >
        초기화
      </button>
    </main>
  )
}

export default BlogPage
