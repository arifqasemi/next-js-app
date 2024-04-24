import React, { useState } from 'react'

function Comment({postId}) {
    const [author,setAuthor] = useState('')
  const [comment,setComment] = useState('')
    
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

    const submitHandler = async()=>{
        if(author ===""){
          alert('please fill the comment and author inputs')
          return
        }
        if(comment ===""){
          alert('please fill the comment and author inputs')
          return
        }
        try {
          const response = await fetch('https://next-js-app-six-theta.vercel.app/api/comments',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name:author,comment:comment,postId:postId})
          });
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          console.log(data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    
        setAuthor('')
        setComment('')
        fetchData()
      }
  return (
    <>
               <div>
            <div className="card">
            <div className="card-body">
              <form className="row g-3">
                <div className="col-12">
                <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="floatingPassword" name='name' placeholder="Your Name" onChange={(e)=>setAuthor(e.target.value)} value={author}/>
                      <label htmlFor="floatingPassword">Your Name</label>
                    </div>
                </div>
                <div className="col-12">
                <div className="form-floating mb-3">
                      <textarea className="form-control" placeholder="Leave a comment here" name='comment' id="floatingTextarea" onChange={(e)=> setComment(e.target.value)} defaultValue={comment}></textarea>
                      <label htmlFor="floatingTextarea">Comments</label>
                    </div>
                </div>
               
                <div className="text-center">
                  <button type="button" className="btn btn-primary" onClick={submitHandler}>Submit Comment</button>
                </div>
              </form>

            </div>
          </div>
            </div>
    </>
  )
}

export default Comment
