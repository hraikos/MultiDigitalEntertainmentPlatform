import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import axios from "axios";

function musicForm() {
    const [values, setValues] = useState({
        name: '',
        author: '',
        genre:'',
        description:'',
        price:''
      })

      const handleInput = (event) => {
        setValues(prev => ({...prev, [event. target .name ]: [event. target . value]}))
      }

      const submit = (e) => {
        e.preventDefault();
        if(values.author)
        {
          alert('Empty value');
        }
        else if(values.description == '')
        {
          alert('Empty value');
        }
        else if(values.genre == '') 
        {
          alert('Empty value');
        }
        else if(values.name == '')
        {
          alert('Empty value');
        }
        else if(values.price == '')
        {
          alert('Empty value');
        }
        else
        {
          axios.post("http://localhost:1027/music", values)
          alert('Form sent successfully');
        }
      }

    return(
    <>
    <h1>Music Page</h1>
    <form action="" onSubmit={submit}>
    <input type='text' placeholder='enter a name' onChange={handleInput} name ='name'/>
      <br/>
      <input type='text' placeholder='enter a author name' onChange={handleInput} name ='author'/>
      <br/>
      <input type='text' placeholder='enter a genre' onChange={handleInput} name ='genre'/>
      <br/>
      <input type='text' placeholder='enter a description' onChange={handleInput} name ='description'/>
      <br/>
      <input type='text' placeholder='enter a price' onChange={handleInput} name ='price'/>
      <br/>
      <button type='submit'>Submit</button>
    </form>
    <Link to={"/homepage"}> <input type="button" value={"Back"}/></Link>
    </>
    )
}

export default musicForm