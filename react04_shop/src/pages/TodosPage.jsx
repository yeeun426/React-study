import React from 'react'
import TodoList from '@/components/TodoList'
import TodoSearch from '@/components/TodoSearch'
import TodoInput from '@/components/TodoInput'

const TodosPage = () => {
  return (
    <main>
      <h2>TodosPage</h2>
      <TodoSearch />
      <TodoInput />
      <TodoList />
    </main>
  )
}

export default TodosPage
