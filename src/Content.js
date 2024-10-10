import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names = ["earn", "grow", "give"]
        const length = Math.floor(Math.random() * 3)
        return names[length]
    }
    const handleSubmit =()=>{
      console.log("submitted")
    }


    return (
        <main>
            <p className='content'>lets {handleNameChange()} Money</p>
            <button onClick={()=>handleSubmit()}> submit</button>
        </main>
    )
}

export default Content
