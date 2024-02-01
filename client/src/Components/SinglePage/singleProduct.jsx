import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import './single.css'

const SingleProduct = () => {
  var {id}=useParams();
  const [val,valFun]=useState([])



 
     
  useEffect(() => {
    axios.get(`http://localhost:3000/single/${id}`).then((res) => {
      valFun(res.data);
    });
  }, [id]);
  
  return (
  <>
    <div className='cover'>
{
  
  <div className='item-container'>
    <div className='headings'>
      <h1>{val.title}</h1>
      <p>{val.desc}</p>
      <h6>{new Date(val.createdAt).toLocaleString('en-GB')}</h6>
    </div>
    <div className='content'>
      <h4>{val.content}</h4>
      <div className='button'>
        <button className='red'><Link to='/'>Back</Link></button>
      </div>
    </div>
  </div>


}
    </div>
  </>
  )
}

export default SingleProduct