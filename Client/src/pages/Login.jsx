import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    // const navigate = useNavigate();

    const handleChange =(e)=>{
        const {name, value} = e.target;
        if(name === 'email'){
            setEmail(value);
        } else if(name === 'password'){
            setPassword(value);
        } else if(name === 'role'){
            setRole(value);
        }

    };

    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(role === 'Admin'){
            try {
                const api =`${import.meta.env.VITE_API_URL}/admin/login`;
                const response = await axios.post(api, {email, password});
                toast.success(response.data.msg);
            //    navigate('/admin/dashboard');
                
            } catch (error) {
                toast.error(error.response.data.msg);
            }
        }
        else if(role === 'User'){
            try {
                const api =`${import.meta.env.VITE_API_URL}/user/login`;
                const response = await axios.post(api, {email, password});
                toast.success(response.data.msg);
            //    navigate('/user/dashboard');
            } catch (error) {
                toast.error(error.response.data.msg);
            }
        }
        else if(role === 'Employee'){
            try {
                const api =`${import.meta.env.VITE_API_URL}/employee/login`;
                const response = await axios.post(api, {email, password});
                toast.success(response.data.msg);
            //    navigate('/employee/dashboard');
            } catch (error) {
                toast.error(error.response.data.msg);
            }
        }
    }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        email: <input type="email" value={email} name='email' 
      onChange={handleChange} required/><br />
        password: <input type="password" value={password} name='password' onChange={handleChange} required/><br />
        role: <select name="role" value={role} onChange={handleChange} required >
            <option value="" disabled>Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Employee"> Employee</option>
        </select>
        <br />
        <button type='submit' >Login</button>
      </form>
    </>
  )
}

export default Login