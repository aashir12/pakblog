import React,{useState} from 'react'
import './home.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Inputs = () => {
    var [val,valFun]=useState({
    title:'',
    desc:'',
    content:''
    })
    const navigate=useNavigate();

    function Changer(event){
        var {name,value}=event.target;

        valFun(
            (prev)=>{
             return   {...prev,[name]:value}
            }
        )
        
    }
    function Clicker(event){
       
        event.preventDefault();
   
        axios.post('http://localhost:3000/input',val).then(
            ()=>{
                
                setTimeout(
                    ()=>{
                   navigate('/')
                    },[1000]
                )
            }
        )
    }

  return (
<>
    <div className='container'>
        <h1>Create a Post</h1>
       <form onSubmit={Clicker}>
       <div className='inputs'>
            <label htmlFor='title'>Title</label>
            <input name='title' value={val.title} onChange={Changer}/>
        </div>
        <div className='inputs'>
            <label htmlFor='desc'>Description</label>
            <textarea name='desc' value={val.desc} onChange={Changer}/>
        </div>
        <div className='inputs'>
            <label htmlFor='content'>Content</label>
            <textarea name='content' value={val.content} onChange={Changer}/>
        </div>

        <div>
        <button className='red'><Link to={'/posts'}>Back</Link></button>
            <button className='green'>Submit</button>
        </div>
       </form>
    </div>
</>
  )
}

export default Inputs