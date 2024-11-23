import React, { useEffect, useState } from 'react'
import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Footer from './Footer'
import Missing from './Missing'
import { Navigate, Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import Post from './Post'
import PostLayout from './PostLayout'
import { format } from 'date-fns'

const App = () => {

  const [post, setPosts] = useState(
    [
      {
        id: 1,
        title: 'My First Post',
        date: "31 Octobar 2005",
        body: 'My Birthday'
      },
      {
        id: 2,
        title: 'My Second Post',
        date: "31 Octobar 2005",
        body: 'My Birthday'
      },
      {
        id: 3,
        title: 'My Third Post',
        date: "31 Octobar 2005",
        body: 'My Birthday'
      },
      {
        id: 4,
        title: 'My Fourth Post',
        date: "31 Octobar 2005",
        body: 'My Birthday'
      },
    ]
  )
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  useEffect(() => {
    const filterdResults = post.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase()))


    setSearchResults(filterdResults.reverse());
  }, [post, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = post.length ? post[post.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd ,yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...post, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');


  }

  return (
    <div>
      <Header title={"Social Media App"} />
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path='/' element={<Home post={searchResults} />}></Route>
        <Route path='post' element={<NewPost
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          handleSubmit={handleSubmit}
          postBody={postBody} s
          setPostBody={setPostBody}
        />}></Route>
        
        <Route path='about' element={<About />}></Route>
        <Route path='*' element={<Missing />}></Route>
      </Routes>

      <Footer />

    </div>
  )
}

export default App
