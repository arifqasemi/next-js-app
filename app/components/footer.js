'use client'
import React from 'react'

function Footer() {

  // const router = useRouter();
  // console.log(router.pathname)
  return (
    <div>
      <div className="site-footer">
<div className="container">
<div className="row justify-content-center copyright">
<div className="col-lg-7 text-center">
<div className="widget">
<ul className="social list-unstyled">
<li><a href="#"><span className="icon-facebook"></span></a></li>
<li><a href="#"><span className="icon-twitter"></span></a></li>
<li><a href="#"><span className="icon-linkedin"></span></a></li>
<li><a href="#"><span className="icon-youtube-play"></span></a></li>
</ul>
</div>
<div className="widget">
<p>Copyright © 2024 All rights reserved | This NextJs app is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://arifqasemi.com/" target="_blank" rel="nofollow noopener">Arif Qasemi</a>
</p>
<div className="d-block">

</div>
</div>
</div>
</div>
</div>

<div id="overlayer" style={{opacity: '-0.1', display:'none'}}></div>
<div className="loader"style={{opacity: '-0.1', display:'none'}}>
<div className="spinner-border" role="status">
<span className="visually-hidden">Loading...</span>
</div>
</div>



</div>
    </div>
  )
}

export default Footer
