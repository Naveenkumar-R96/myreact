import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <form action="" className='search'
      onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="Search">Search</label>
      <input type="text" placeholder='Search' role='Search Box'
      value={search}
      onChange={(e)=>setSearch(e.target.value)} />
      
    </form>
  )
}

export default Search
