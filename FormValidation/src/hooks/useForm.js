import React, { useState } from 'react'

const useForm = () => {

    const [values,setValues]=useState({
        username:'',
        email:'',
        password:'',
        cfmpassword:'',
    })

    const [errors,serErrors]=useState({});

    const handlChange =(e)=>{
		console.log(e.target.value,e.target.name)
	}

  return (
    <div>
      
    </div>
  )
}

export default useForm
