import { getTodosData } from '@/api/todosApi'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// actions
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await getTodosData()
  return res
})
export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, status => {
        status.status = 'loading'
        status.error = null
      })
      .addCase(fetchTodos.fulfilled, (status, action) => {
        status.status = 'succeeded'
        status.todos = action.payload
        status.error = null
      })
      .addCase(fetchTodos.rejected, (status, action) => {
        status.status = 'failed'
        status.error = action.error.message
      })
  },
})
