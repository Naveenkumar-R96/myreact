import React from 'react'
import Feed from './Feed'

const Home = ({post}) => {
  return (
    <div>
      {post.length ? (
      <Feed post={post}/>  ) : (
        <p>No Posts to Display</p>
      )
    }
    </div>
  )
}

export default Home
