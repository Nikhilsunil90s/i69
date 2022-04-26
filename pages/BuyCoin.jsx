import React from 'react'
import Header from '../components/Navbar/index'
import Footer from '../components/FooterBar'
import logo1 from '../images/logo-black.png'
import Image from 'next/image'

function BuyCoin(){
    return <>
        <Header/>
        <div className="buy-container">
            <div id="divhtml" className="div-curve">
                <Image src={logo1} id="logo"></Image>
            </div>
            <h2 class="buy_coin_headeing py-3 pt-4">BUY CHAT COIN</h2>
            <div>
                {fakeCoinPricing.map((p, i) => <CoinDesc price={p.price} strike={p.strike} count={p.count} key={i} />)}
            </div>
        </div>
        <Footer/>
    </>
}

export default BuyCoin;

function CoinDesc(props) {

    const [moneyInt, moneyFloat] = props.price.split(".");

    return <div class="row coin-parent px-lg-5 px-2 mt-3">
        <div class="col-6 coin-left d-flex flex-column  pb-lg-2 pb-0">
            <span>{props.count}</span>
            <small>CHAT COINS</small>
        </div>
        <div class="col-6 coin-right d-flex align-items-center justify-content-end ">
            <strike> €{props.strike} </strike>
            <span class="ml-md-5 ml-2">{moneyInt}<small>.{moneyFloat}</small></span>
        </div>
    </div>
}

const fakeCoinPricing = [
    { count: "100", strike: "8.99", price : "4.99" },
    { count: "250", strike: "12.99", price : "9.99" },
    { count: "500", strike: "19.99", price : "14.99" },
    { count: "1150", strike: "34.99", price : "24.99" },
    { count: "2550", strike: "66.99", price : "49.99" },
    { count: "5600", strike: "149.99", price : "99.99" }
]