import React from "react"
import Link from "next/link";
import Header from '../components/Navbar/index'
import Footer from '../components/FooterBar'
import Image from "next/Image";
import logo from "../images/logo-right.jpg"
import cardImg from  "../images/demo-user.jpg"
import logo1 from "../images/logo.png"
function Search(){
    return(
        <>
        <Header />
        <div className="">
           <div class="header-control header-gold">
        <i class="fa fa-angle-left " aria-hidden="true"></i>
        <h5>SEARCH RESULT</h5>
        <Image src={logo} />
    </div>

    <ul class="nav nav-tabs search-tab" id="" role="tablist">
        <li class="nav-item" role="presentation">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                aria-selected="true">RANDOM</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                aria-selected="false">POPULAR</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
                aria-selected="false">MOST ACTIVE</a>
        </li>
    </ul>
    <div class="tab-content user-search-area" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row m-0">
                <div class="  pt-4 col-lg-3 col-md-4 col-sm-6 col-6">
                    <Link href="/BuyCoin">
                    <div class="search-card">
                        <div class="search-card-img">
                    <Image src={logo1} alt="" />
                   </div>
                        <h3 class="text-center">BUY CHAT COIN</h3>
                        <strong>But i69 coins - open new world of connection</strong>
                    </div>
                    </Link>
                </div>
                <div class="search-items  col-lg-3 col-md-4 col-sm-6 col-6">
                <Image src={cardImg} alt="" />
                    
                    <span>Ammanda , 28</span>
                </div>
                <div class="search-items  col-lg-3 col-md-4 col-sm-6 col-6">
                <Image src={cardImg} alt="" />
                    
                    <span>Ammanda , 28</span>
                </div>
                <div class="search-items col-lg-3 col-md-4 col-sm-6 col-6">
                <Image src={cardImg} alt="" />
                
                    <span>Ammanda , 28</span>
                </div>
                <div class="search-items  col-lg-3 col-md-4 col-sm-6 col-6">
                <Image src={cardImg} alt="" />
                    
                    <span>Ammanda , 28</span>
                </div>
            </div>
            
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="row m-0">
                <div class="  pt-4 col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="search-card">
                        <div class="search-card-img">
                    <Image src={logo1} alt="" />
                   </div>
                        <h3 class="text-center">BUY CHAT COIN</h3>
                        <strong>But i69 coins - open new world of connection</strong>
                    </div>
                </div>
                <div class="search-items  col-lg-3 col-md-4 col-sm-6 col-6">
                <Image src={cardImg} alt="" />
                    
                    <span>Ammanda , 28</span>
                </div>
                <div class="search-items  col-lg-3 col-md-4 col-sm-6 col-6">
                <Image src={cardImg} alt="" />
                    
                    <span>Ammanda , 28</span>
                </div>
                <div class="search-items col-lg-3 col-md-4 col-sm-6 col-6">
                <Image src={cardImg} alt="" />
                
                    <span>Ammanda , 28</span>
                </div>
                <div class="search-items  col-lg-3 col-md-4 col-sm-6 col-6">
                <Image src={cardImg} alt="" />
                    
                    <span>Ammanda , 28</span>
                </div>
            </div>
            
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div class="row m-0">
                <div class="  pt-4 col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="search-card">
                        <div class="search-card-img">
                    <Image src={logo1} alt="" />
                   </div>
                        <h3 class="text-center">BUY CHAT COIN</h3>
                        <strong>But i69 coins - open new world of connection</strong>
                    </div>
                </div>
                <div class="search-items  col-lg-3 col-md-4 col-sm-6 col-6">
                <Image src={cardImg} alt="" />
                    
                    <span>Ammanda , 28</span>
                </div>
                <div class="search-items  col-lg-3 col-md-4 col-sm-6 col-6">
                <Image src={cardImg} alt="" />
                    
                    <span>Ammanda , 28</span>
                </div>
                <div class="search-items col-lg-3 col-md-4 col-sm-6 col-6">
                <Image src={cardImg} alt="" />
                
                    <span>Ammanda , 28</span>
                </div>
                <div class="search-items  col-lg-3 col-md-4 col-sm-6 col-6">
                <Image src={cardImg} alt="" />
                    
                    <span>Ammanda , 28</span>
                </div>
            </div>
            
        </div>
        </div>
        </div>
        <Footer />
        </>
    )
}
export default Search;