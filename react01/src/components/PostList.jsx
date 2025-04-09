import React from 'react'
import List from './List'

const PostList = ({ data, setData }) => {
  console.log('PostList', data)

  return (
    <div className="mw">
      <div className="totalcount">
        <strong>TotalCount</strong>
        <span>{data.length}</span>
      </div>
      <ul className="postlist">
        {data.map((area, i) => (
          <List key={i} area={area} setData={setData} />
        ))}
      </ul>
    </div>
  )
}

export default PostList
