import React from 'react'
import Header from'./Header'
import Content from './Content'
import Footer from './Footer'
import './App.css'
import { useState } from 'react'
import Additem from './Additem'
import Search from './Search'
const App = () => {

  const [items, setItems] = useState(
   JSON.parse(localStorage.getItem("todo_list"))
  );

  

  const [newItem,setNewItem]=useState('')

  const [search,setSearch]=useState('')

  const addItem=(item)=>{
    const id = items.length ? items[items.length -1].id+1 : 1;
    const addNewItem ={id,cheked:false,item};
    const listItems =[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(newItem)
    
    setNewItem('')
    addItem(newItem)
  }

  

  const handleCheck = (currentid) => {
    const listItems = items.map(item => (item.id === currentid ? { ...item, cheked: !item.cheked } : item))
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  const handleTrash = (currentid) => {
    const listItems = items.filter(item => item.id !== currentid)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  


  return (
    <div className='app'>
      <Header />
      <Additem
      handleSubmit={handleSubmit}
      newItem={newItem}
      setNewItem={setNewItem}
      />
      <Search
      search={search}
      setSearch={setSearch}
      />
      <Content
      items={items}
      handleCheck={handleCheck}
      handleTrash={handleTrash}
      
      />
      
      <Footer 
      length={items.length}
      />
     
    </div>
    
  )
}

export default App
