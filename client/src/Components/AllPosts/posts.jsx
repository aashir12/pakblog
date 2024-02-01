import React, { useEffect, useState } from 'react';

import './allposts.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Post = () => {
  const [alldata, dataFun] = useState([]);
  const [error,errorFun]=useState()

  useEffect(() => {
    axios.get('http://localhost:3000/').then((res) => {
      dataFun(res.data);
    })
  }, []);

  // Function to truncate text to the first 47 words and add "Show More" link
 function Compressor(input,id){
     var words=input.split(' ');


     var sliced = words.slice(0, 25).join(' ');

     var remaining = words.slice(47).join(' ');

     if (sliced){
       return <span>  {sliced}  <Link to={`/single/${id}`} style={{color:'#6C22A6',textDecoration:'underline'}}>Show More</Link></span>
     }
 }

 function Deleter(id) {
  axios.post(`http://localhost:3000/delete/${id}`)
    .then(() => {
      // Update state by filtering out the deleted post
   
      setTimeout(() => {
        alert('Deleted Successfully')
        dataFun(prevData => prevData.filter(item => item._id !== id));
      }, 500);
    })
    .catch(error => {
      console.error('Error deleting post:', error);
    });
}

return (
  <div className='cover'>

    <button className='btn'><Link to={'/new'}>New</Link></button>
    <div className='cardCover'>
      {
        alldata.map((item) => {
          const createdDate=new Date(item.createdAt);
          const formattedDate = createdDate.toLocaleDateString('en-GB');
          return(
          <div className='card' key={item.id}>
            <h1>{item.title}</h1>
            <h6>{formattedDate}</h6>
            <p>{item.desc}</p>
            <h4>{Compressor(item.content,item._id)}</h4>
            <div className='button'>
              <button className='red'><Link to={`/posts/${item._id}`}>Edit</Link></button>
              <button className='green' onClick={() => { Deleter(item._id) }} style={{backgroundColor:'#6C22A6'}}>Delete</button>
              
            </div>
          </div>
        )
        })
    }
    </div>
  </div>
);

};

export default Post;
