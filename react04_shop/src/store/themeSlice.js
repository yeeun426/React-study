import { createSlice } from '@reduxjs/toolkit'

const savedTheme = localStorage.getItem('theme')
const isDarkTheme = savedTheme !== null ? JSON.parse(savedTheme) : false

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkMode: isDarkTheme,
  },
  reducers: {
    toggleTheme: state => {
      state.isDarkMode = !state.isDarkMode
    },
  },
})

export const { toggleTheme } = themeSlice.actions
