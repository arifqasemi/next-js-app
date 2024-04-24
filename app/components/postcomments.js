import React, { useEffect, useState } from 'react';

function PostComments({ postId }) {
  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/comments?postId=${postId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCommentData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <div>
      <h4>Comments for Post {postId}</h4>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && commentData.length === 0 && <p>No comments found.</p>}
      {!loading && !error && commentData.length > 0 && (
        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#f6f6f6',padding:7,borderRadius:5}}>
            <div style={{display:'flex',justifyContent:'space-between',borderBottom:'solid 1px white'}}><p>Comment:</p><p>Author:</p></div>
            {commentData.map(comment => (
                <div style={{display:'flex',backgroundColor:'#f6f6f6',justifyContent:'space-between'}} key={comment.id}>
                <p>{comment.content}</p>
                <p>{comment.author}</p>
                </div>
          
          ))}
        </div>
      )}
    </div>
  );
}

export default PostComments;
