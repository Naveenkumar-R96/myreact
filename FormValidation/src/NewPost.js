import React from 'react'

const NewPost = ({handleSubmit,postTitle,setPostTitle,postBody,setPostBody}) => {
  return (
    <div>
      NewPost
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input type="text"
          id='postTitle'
          required
          value={postTitle}
          onChange={e=> setPostTitle(e.target.value)}
        />
        <label htmlFor="">Post</label>
        <textarea name="" id="postBody"
        required
        value={postBody}
        onChange={e=>setPostBody(e.target.value)}
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default NewPost
