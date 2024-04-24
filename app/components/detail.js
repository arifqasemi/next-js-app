'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Comment from './comment';
import PostComments from './postcomments';

function Detail({postId}) {
  const [postData, setPostData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://next-js-app-six-theta.vercel.app/api/detail/1',{
          method:"POST",
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({postId})
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPostData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

 

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <div  style={{ display: 'flex',flexDirection:'column', alignItems: 'center', justifyContent: 'center',gap:20, height: 'auto',width:'50%'}}>
      <h3 className='text-center mt-5'>{postData && postData.title}.</h3>
      <p>{postData && postData.description}.</p>
          <Image src={postData ? `/assets/images/${postData.image}`: ''} height={400} width={600} alt='image'/>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language oc</p>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div className='my-4'>
        <PostComments postId={postId}/>
            <h3>Add Comments</h3>
           <Comment postId={postId}/>
        </div>
      </div>
    </div>
  )
}

export default Detail
