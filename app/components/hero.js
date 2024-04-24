"use client"
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import im from '../../assets/images/post_lg_2.jpg.webp'
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';




function Hero() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);


  const dateFormate =(data)=>{
    const date = new Date(data)
    const options = {month:'long',day:'numeric',year:'numeric'}
    return date.toLocaleDateString('en-US',options)

  }
    return (
      <div className='mt-5'>
            <Swiper pagination={{clickable:true,el:'.custom-pagination'}} modules={[Pagination]} className="mySwiper">
        {postData && postData.data.map((post)=>(
          <SwiperSlide>
          <div className='d-flex  m-auto gap-4' style={{width:'80%'}}>
          <div>
            <Link href={`/blog/${post.id}`}>
              <Image src={`/assets/images/${post.image}`} width={400} height={300} />
            </Link>
          </div>
          <div className='d-flex flex-column align-center justify-content-center'>
            <p><span className='fw-bold'>{post.slug}</span> — {dateFormate(post.createdAt)}</p>
              <Link href={`/blog/${post.id}`} ><h2 className='fs-40x fw-bold'>{post.title}</h2></Link>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination d-flex justify-content-center mt-5"  slot="pagination"></div>
      </div>
    );
  }


export default Hero
