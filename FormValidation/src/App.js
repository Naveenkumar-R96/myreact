import React from 'react'
import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Footer from './Footer'
import Missing from './Missing'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/newpost'>New Post</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/newpost' element={<NewPost/>}/>
      </Routes>
   {/*   <Header/>
     <Nav/>
     <Home/>
     <NewPost/>
     <PostPage/>
     <About/>
     <Missing/>
     <Footer/> */}
    </div>
  )
}

export default App
