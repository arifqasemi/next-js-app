import React from 'react'

function Subscribe() {
  return (
    <div>
      <div className="py-5 bg-light mx-md-3 sec-subscribe mt-5">
        <div className="container">
        <div className="row">
        <div className="col-lg-12">
        <h2 className="h4 fw-bold">Subscribe to newsletter</h2>
        </div>
        </div>
        <form action="" className="row">
        <div className="col-md-8">
        <div className="mb-3 mb-md-0">
        <input type="email" className="form-control" placeholder="Enter your email"/>
        </div>
        </div>
        <div className="col-md-4 d-grid">
        <input type="submit" className="btn btn-primary" value="Subscribe"/>
        </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Subscribe
