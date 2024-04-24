'use client'
import Sidebar from '@/app/components/sidebar';
import { GlobalContext } from '@/app/context/GlobaProvider';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'


function Category({params}) {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {model} = useContext(GlobalContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/category?slug=${params.catId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPostData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  return (
    <>
  <div className='d-flex gap-5 flex-wrap justify-content-center mt-5 mb-5'>
      {postData && postData.map((post) => (
        <div key={post.id} className='d-flex flex-column' style={{ width: 300 }}>
          <Link href={`/blog/${post.id}`}>
          <Image src={`/assets/images/${post.image}`} height={400} width={600} alt='image' style={{width:'300px',height:250}}/>

            {/* <Image src={im} height={200} width={300} alt='post image' style={{ borderRadius: 5 }} /> */}
          </Link>
          <p><span className='fw-bold text-capitalize'>{post.slug}</span> — {formatDate(post.createdAt)}</p>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700 }}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
          </div>
          <p style={{ color: '#888' }}>{post.description}</p>
          <div className='d-flex gap-2'>
            <Image src='/assets/images/person_1.jpg.webp' height={50} width={50} alt='author image' style={{ borderRadius: 50 }} />
            <div>
              <p className="mb-0 fw-bold">{post.author}</p>
              <p className="mb-0">{post.authorRole}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    {model && <Sidebar/>}
    </>
 
  )
}

export default Category
