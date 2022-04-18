import React from 'react'
import Header from '../components/Navbar/index'
import Footer from '../components/FooterBar'
import logo from '../images/login-bg-3.png'
import logo1 from '../images/logo-black.png'
import Image from 'next/image'
import { Avatar, ImageListItem } from '@mui/material'
function BuyCoin(){
    return(
        <>
<Header />
<div class="buy-container">
         <div id="divhtml " className="div-curve ">
            <Image src={logo1} id="logo" alt="" />
        </div>
        <h2 class="buy_coin_headeing py-3 pt-4">BUY CHAT COIN</h2>
        <div class="">
            <div class="row coin-parent px-lg-5 px-2 mt-3">
                <div class="col-6 coin-left d-flex flex-column  pb-lg-2 pb-0">
                        <span>100</span>
                        <small>CHAT COINS</small>
                </div>
                <div class="col-6 coin-right d-flex align-items-center justify-content-end ">
                    <strike> €8.99 </strike>
                    <span class="ml-md-5 ml-2">4<small>.99</small></span>
                </div>
            </div>
            <div class="row coin-parent px-lg-5 px-2 mt-3">
                <div class="col-6 coin-left d-flex flex-column  pb-lg-2 pb-0">
                        <span>250</span>
                        <small>CHAT COINS</small>
                </div>
                <div class="col-6 coin-right d-flex align-items-center justify-content-end ">
                    <strike> €12.99 </strike>
                    <span class="ml-md-5 ml-2">9<small>.99</small></span>
                </div>
            </div>
            <div class="row coin-parent px-lg-5 px-2 mt-3">
                <div class="col-6 coin-left d-flex flex-column  pb-lg-2 pb-0">
                        <span>500</span>
                        <small>CHAT COINS</small>
                </div>
                <div class="col-6 coin-right d-flex align-items-center justify-content-end ">
                    <strike> €19.99 </strike>
                    <span class="ml-md-5 ml-2">14<small>.99</small></span>
                </div>
            </div>
            <div class="row coin-parent px-lg-5 px-2 mt-3">
                <div class="col-6 coin-left d-flex flex-column  pb-lg-2 pb-0">
                        <span>1150</span>
                        <small>CHAT COINS</small>
                </div>
                <div class="col-6 coin-right d-flex align-items-center justify-content-end ">
                    <strike> €34.99 </strike>
                    <span class="ml-md-5 ml-2">24<small>.99</small></span>
                </div>
            </div>
         
            <div class="row coin-parent px-lg-5 px-2 mt-3">
                <div class="col-6 coin-left d-flex flex-column  pb-lg-2 pb-0">
                        <span>2550</span>
                        <small>CHAT COINS</small>
                </div>
                <div class="col-6 coin-right d-flex align-items-center justify-content-end ">
                    <strike> €66.99 </strike>
                    <span class="ml-md-5 ml-2">49<small>.99</small></span>
                </div>
            </div>
            <div class="row coin-parent px-lg-5 px-2 mt-3">
                <div class="col-6 coin-left d-flex flex-column  pb-lg-2 pb-0">
                        <span>5600</span>
                        <small>CHAT COINS</small>
                </div>
                <div class="col-6 coin-right d-flex align-items-center justify-content-end ">
                    <strike> €149.99 </strike>
                    <span class="ml-md-5 ml-2">99<small>.99</small></span>
                </div>
            </div>
          </div>  
    </div>
    <Footer />
    </>
    )
}
export default BuyCoin;