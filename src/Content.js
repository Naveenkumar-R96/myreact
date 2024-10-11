import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {

  const [items, setItems] = useState(
    [
      {
        id: 1,
        cheked: false,
        item: "practice coding"
      },
      {
        id: 2,
        cheked: false,
        item: "Learning React"
      },
      {
        id: 3,
        cheked: false,
        item: "Play Cricket"
      }
    ]
  );

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
    <main className='contents'>
      
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <input type="checkbox"
                checked={item.cheked}
                onClick={() => handleCheck(item.id)}
              />
              <label htmlFor="" onClick={() => handleCheck(item.id)}
                style={(item.cheked)? {textDecoration:'line-through'}:null}
                >{item.item}</label>
              <FaTrashAlt
                role='button'
                tabIndex="0"
                onClick={() => handleTrash(item.id)}
              />
            </li>
          );
        })}
      </ul>
     {(items.length ? null : (<p>Your list is empty</p>))}

    </main>
  )
}

export default Content
