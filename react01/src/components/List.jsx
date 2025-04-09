import React from 'react'

const List = ({ area, setData }) => {
  const removeItem = () => {
    setData(prev => {
      const newData = prev.filter(item => item !== area)
      localStorage.setItem('trip', JSON.stringify(newData))
      return newData
    })
  }
  return (
    <li>
      <p>{area}</p>
      <i className="fa-solid fa-trash-can" onClick={removeItem}></i>
    </li>
  )
}

export default List
