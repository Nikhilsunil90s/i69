import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3">
        <Link className="navbar-brand" href="/">
          <Image src={require("../../images/logo-right.jpg").default} width="30px" height="30px"></Image>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto align-items-center" style={{ rowGap: '0.5rem'}}>
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faqs">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/policy">Policy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/terms">Terms</a>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <button className='btn px-4 btn-sm mx-auto' style={{ background: 'var(--web-gold)' }} >
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header;
