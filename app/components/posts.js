import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import im from '../../assets/images/post_lg_2.jpg.webp';
// import authorImage from '/assets/images/person_1.jpg.webp';

function Post() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://next-js-app-six-theta.vercel.app/api/posts');
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

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  return (
    <div className='d-flex gap-5 flex-wrap justify-content-center mt-5 mb-5'>
      {postData && postData.data.map((post) => (
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
  );
}

export default Post;
