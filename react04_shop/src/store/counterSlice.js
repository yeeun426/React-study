import { createSlice } from '@reduxjs/toolkit'
// slice로 만든걸 store에 연결 해줘야함
export const counterSlice = createSlice({
  name: 'counter', // slice의 이름은 고유해야함. counter의 state를 관리할 것임
  initialState: {
    count: 1,
    label: '카운터',
  }, // 관리할 내용
  reducers: {
    increment: (state, action) => {
      state.count += action.payload
    },
    decrement: state => {
      state.count -= 1
    },
    reset: state => {
      state.count = 0
    },
  }, // state가 변경되는 변경함수가 등록되는 곳, 얘를 쓰려면 함수 이름을 각각 export해야됨
})

export const { increment, decrement, reset } = counterSlice.actions // ? 왜 actions
