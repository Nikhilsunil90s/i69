import React from 'react'
import Header from '../components/Navbar/index'
import Footer from '../components/FooterBar'
import img from "../images/dummy-01.jpg"
import Image from 'next/image'
import img1 from "../images/login-bg-2.png"
import img2 from '../images/login-bg-3.png'
import img3 from "../images/logo-right.jpg"
const About =()=>{
return(
    <>
    <Header />
     {/* <!-- header area --> */}
    <div className='body-lg'>
    <div class="header-control h-c-g">
        <i class="fa fa-angle-left gold-icon" aria-hidden="true"></i>
        <div style={{flex:"1"}}>
            <h5>TRESASURE</h5>
        </div>
        
        <Image src={img3} height="20px" width="20px" />
    </div>

    <div className='container-fluid'>
<div className='row'>
<div className='col-md-7 col-sm-12 pd'>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <Image src={img} />        </div>
    <div class="carousel-item">
      
    <Image src={img1} />        
    </div>
    <div class="carousel-item">
    <Image src={img2} />      
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
</div>
</div>
<div className='col-md-5 col-sm-12 pd'>
<div class="tab-content col-lg-5 col-12 px-0" id="nav-tabContent" >
          
            <nav class="about-intrest">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                        aria-controls="nav-home" aria-selected="true">ABOUT</a>
                    <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                        aria-controls="nav-profile" aria-selected="false">INTERESTS</a>
                </div>
            </nav>
            
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
               >
                <div class="about-tab">
                    <h3>Treasure, 18</h3>
                    <p>Top Modal </p>
                    <p>Modal</p>
                    <button class="mt-3 global-btn-2"><i class="fas fa-comment-dots" aria-hidden="true"></i> <span>SEND A MESSAGE</span> </button>
                    <div class="user-info-text mt-4">
                        <span class="gold-color font-weight-bold">About</span>
                        <p>I'm an English modal, singel, and actress :)</p>
                        <div class="user-badge mt-3 ">
                            <button class="global-btn-3">American Beauty</button>
                            <button class="global-btn-3">Actress</button>
                            <button class="global-btn-3">69 Lover</button>
                        </div>
                        <span class="gold-color font-weight-bold mt-3">Political Views</span>
                        <p>Conservative</p>
                        <span class="gold-color font-weight-bold mt-3">Ethnicity</span>
                        <p>White</p>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                >
                <div class="about-tab">
                    <h3>Treasure, 18</h3>
                    <p>Top Modal </p>
                    <p>Modal</p>
                    <button class="mt-3 global-btn-2"><i class="fas fa-comment-dots" aria-hidden="true"></i> <span>SEND A MESSAGE</span> </button>
                    <div class="user-info-text mt-4">
                        <span class="gold-color font-weight-bold">About</span>
                        <p>I'm an English modal, singel, and actress :)</p>
                        <div class="user-badge mt-3 ">
                            <button class="global-btn-3">American Beauty</button>
                            <button class="global-btn-3">Actress</button>
                            <button class="global-btn-3">69 Lover</button>
                        </div>
                        <span class="gold-color font-weight-bold mt-3">Political Views</span>
                        <p>Conservative</p>
                        <span class="gold-color font-weight-bold mt-3">Ethnicity</span>
                        <p>White</p>
                    </div>
                </div>
            </div>
        </div>

</div>

</div>
</div>
    </div>
 <Footer />
    </>
)
}
export default About