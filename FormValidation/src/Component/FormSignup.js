import React from 'react'
import useForm from '../hooks/useForm'

const FormSignup = () => {

	

	return (
		<div className="form_content_right">
			<div className="form">
				<h1>Get Started with us , Create your account</h1>
				<div className="form_inputs">
					<label htmlFor="username" className='form_label'>Username</label>
					<input type="text"
						placeholder='Username'
						className='form_input'
						id='username'
						onChange={handlChange}
					/>
				</div>
				<div className="form_inputs">
					<label htmlFor="email" className='form_label'>Email</label>
					<input type="text"
						placeholder='Email'
						className='form_input'
						name='email'
						id='email'
						onChange={handlChange}

					/>
				</div>
				<div className="form_inputs">
					<label htmlFor="password" className='form_label'>Password</label>
					<input type="text"
						placeholder='Password'
						className='form_input'
						name='password'
						id='password'
						onChange={handlChange}

					/>
				</div>
				<div className="form_inputs">
					<label htmlFor="cfmpassword" className='form_label'>Confirm Password</label>
					<input type="text"
						placeholder='Confirm password'
						className='form_input'
						name='cfmpassword'
						id='cfmpassword'
						onChange={handlChange}

					/>
				</div>
				<button className="form_input_btn" type='submit'>Sign up</button>
				<span>Already have an account ? Login <a href="#">here</a></span>

			</div>
		</div>
	
	)
}

export default FormSignup
