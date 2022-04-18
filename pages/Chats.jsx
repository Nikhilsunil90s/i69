import React from "react";
import Header from '../components/Navbar/index'
import Footer from '../components/FooterBar'
import Image from "next/image";
import cardImg from "../images/demo-user.jpg";
import logo from "../images/logo-right.jpg"
import coin from "../images/coin.PNG"
function Chats() {
  return (
    <>
    <Header />
      <div className="body-lg">
        {/* <!-- header area --> */}
<div className=""> 
        <div className="row m-0">
          <div className="header-control header-control-msg h-c-g col-12">
            <i className="fa fa-angle-left gold-icon" aria-hidden="true"></i>
            <div style={{ flex: "1" }}>
              <h5>HELENE</h5>
            </div>
            <Image src={logo} />
          </div>
          <div className="col-4 user-list-parent px-0">
            <div className="chat-headers msg-header">MESSAGES</div>
            <div className="scr-msg">
              <div className="user-list">
                <small>Few seconds ago</small>
                <Image src={cardImg} alt="" />
                <div className="chat-list-text">
                  <div>
                    <strong>Lena </strong>
                    <span>Hey How are you</span>
                  </div>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div className="user-list">
                <small>Few seconds ago</small>
                <Image src={cardImg} alt="" />

                <div className="chat-list-text">
                  <div>
                    <strong>Lena </strong>
                    <span>Hey How are you</span>
                  </div>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div className="user-list">
                <small>Few seconds ago</small>
                <Image src={cardImg} alt="" />

                <div className="chat-list-text">
                  <div>
                    <strong>Lena </strong>
                    <span>Hey How are you</span>
                  </div>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div className="user-list">
                <small>Few seconds ago</small>
                <Image src={cardImg} alt="" />

                <div className="chat-list-text">
                  <div>
                    <strong>Lena </strong>
                    <span>Hey How are you</span>
                  </div>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div className="user-list">
                <small>Few seconds ago</small>
                <Image src={cardImg} alt="" />

                <div className="chat-list-text">
                  <div>
                    <strong>Lena </strong>
                    <span>Hey How are you</span>
                  </div>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div className="user-list">
                <small>Few seconds ago</small>
                <Image src={cardImg} alt="" />

                <div className="chat-list-text">
                  <div>
                    <strong>Lena </strong>
                    <span>Hey How are you</span>
                  </div>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div className="user-list">
                <small>Few seconds ago</small>
                <Image src={cardImg} alt="" />

                <div className="chat-list-text">
                  <div>
                    <strong>Lena </strong>
                    <span>Hey How are you</span>
                  </div>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div className="user-list">
                <small>Few seconds ago</small>
                <Image src={cardImg} alt="" />

                <div className="chat-list-text">
                  <div>
                    <strong>Lena </strong>
                    <span>Hey How are you</span>
                  </div>
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        
          <div className="col-8 chat-area  px-0">
            <div className="scr-cht chat-area-color">
              <div className="coin-area">
                  <Image src={coin} />
                <span>432</span>
                <small className="pb-1">COINS LEFT</small>
              </div>

              <div className="msg-right ">
                <div className="bubble-1">
                  <span className="text-left ">Hey</span>
                  <small className=" w-100">02:09</small>
                </div>
              </div>
              <div className="msg-left">
                <Image src={cardImg} alt="" />
                <div className="bubble-2">
                  <span className="text-left ">coocouco</span>
                  <small className="text-right w-100">02:09</small>
                </div>
              </div>
              <div className="chat-time chat-time-color">5 March 2021</div>
              <div className="msg-right">
                <div className="bubble-1">
                  <span className="text-left ">how are you</span>
                  <small className="text-right w-100">02:09</small>
                </div>
              </div>
              <div className="msg-left">
                <Image src={cardImg} alt="" />
                <div className="bubble-2">
                  <span className="text-left ">coocouco</span>
                  <small className="text-right w-100">02:09</small>
                </div>
              </div>
              <div className="msg-left">
        
                <Image src={cardImg} alt="" />
                <div className="bubble-2">
                  <span className="text-left ">coocouco</span>
                  <small className="text-right w-100">02:09</small>
                </div>
              </div>
              <div className="msg-right">
                <div className="bubble-1">
                  <span className="text-left ">Hey</span>
                  <small className="text-right w-100">02:09</small>
                </div>
              </div>
              <div className="msg-right">
                <div className="bubble-1">
                  <span className="text-left ">Hey</span>
                  <small className="text-right w-100">02:09</small>
                </div>
              </div>

              <div className="chat-send-area">
                <i className="fa fa-paperclip" aria-hidden="true"></i>
                <div className="send">
                  <input type="text" placeholder="Enter a message" />
                  <i className="fas fa-arrow-up"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    
      </div>
      <Footer />
    </>
  );
}
export default Chats;
