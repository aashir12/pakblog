import React,{useEffect, useState} from 'react'
import './home/home.css';
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {
   const {id}=useParams();
   const navigate=useNavigate();
    var [val,valFun]=useState([{
    title:'',
    desc:'',
    content:''
    }])

    

 
     
      useEffect(() => {
        axios.get(`http://localhost:3000/single/${id}`).then((res) => {
          valFun(res.data);
        })
      
      }, [id]);
      
        
    
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
        console.log(val);
        axios.patch(`http://localhost:3000/update/${id}`,val).then(
        ()=>{
                
          setTimeout(() => {
        navigate('/');
      }, 1000);
      }
       
        )
    }

    

  return (
<>
    <div className='container'>
        <h1>Update the post</h1>
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
            <button className='red'><Link to={'/'}>Back</Link></button>
            <button className='green'>Submit</button>
        </div>
       </form>
    </div>
</>
  )
}

export default Update