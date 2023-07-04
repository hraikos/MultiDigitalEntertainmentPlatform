import React, {useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })
  
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event. target .name ]: [event. target . value]}))
  }

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:1027/employee_login_information', values)
    .then(res => {
      if(res.data === "Success") {
        navigate('/homepage');
      } else {
        alert("no record found");
      }
    })
  }

  return (
    <form onSubmit={login}>
      <h1>Login</h1>
     <input type='text' placeholder='enter a username' onChange={handleInput} name ='username'/>
      <br/>
      <input type='password' placeholder='enter a password' onChange={handleInput} name='password'/>
      <br/>
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;

