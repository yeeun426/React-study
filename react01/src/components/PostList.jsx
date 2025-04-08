import React from 'react'
import List from './List'

const PostList = ({ data }) => {
  console.log(data)
  // 자식 컴포넌트에게 state값을 전송할 때 props 전송한다.

  return (
    <div className="mw">
      <div className="totalcount">
        <strong>TotalCount</strong>
        <span>0</span>
      </div>
      <ul className="postlist">
        {data.map((area, i) => (
          <List key={i} area={area} />
        ))}
      </ul>
    </div>
  )
}

export default PostList
