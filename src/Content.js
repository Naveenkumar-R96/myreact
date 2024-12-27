import React from 'react'

const Content = () => {
    const handlechange = () => {
        const name =['naveen','kumar','naveeen']
        const int =Math.floor(Math.random()*3)
        return name[int]}
  return (
    <div>
      <p>hai guys iam {handlechange()}</p>
    </div>
  )
}

export default Content
