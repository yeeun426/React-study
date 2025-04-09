import React from 'react'
import List from './List'

const PostList = ({ data, setData }) => {
  console.log(data)

  return (
    <div className="mw">
      <div className="totalcount">
        <strong>TotalCount</strong>
        <span>0</span>
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
