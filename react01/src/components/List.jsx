import React from 'react'

const List = ({ area }) => {
  return (
    <li>
      <p>{area}</p>
      <i className="fa-solid fa-trash-can"></i>
    </li>
  )
}

export default List
