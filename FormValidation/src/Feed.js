import React from 'react'
import Post from './Post'
const Feed = ({post}) => {
  return (
    <div>
      {post.map(post=>(
        <Post key={post.id} post={post}/>
      ))}
    </div>
  )
}

export default Feed
