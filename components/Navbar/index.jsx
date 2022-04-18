// import React, { useState, useRef, useEffect, useReducer } from "react";
// import Image from "next/image";
// import PropTypes from "prop-types";
// import classNames from "classnames";
// import { AppBar,makeStyles,CssBaseline,  Grid, Toolbar, Typography } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { useTranslation } from "react-i18next";
// import "../../services/localizationService";
// const propTypes = {
//   navPosition: PropTypes.string,
//   hideNav: PropTypes.bool,
//   hideSignin: PropTypes.bool,
//   hideSignup: PropTypes.bool,
//   bottomOuterDivider: PropTypes.bool,
//   bottomDivider: PropTypes.bool,
// };

// const defaultProps = {
//   navPosition: "",
//   hideNav: false,
//   hideSignin: false,
//   hideSignup: false,
//   bottomOuterDivider: false,
//   bottomDivider: false,
// };

// const Header = ({
//   className,
//   navPosition,
//   hideNav,
//   hideSignin,
//   hideSignup,
//   bottomOuterDivider,
//   bottomDivider,
//   ...props
// }) => {
//   const [, forceUpdate] = useReducer((x) => x + 1, 0);

//   const [isActive, setIsactive] = useState(false);

//   const nav = useRef(null);
//   const hamburger = useRef(null);

//   useEffect(() => {
//     isActive && openMenu();
//     document.addEventListener("keydown", keyPress);
//     document.addEventListener("click", clickOutside);
//     return () => {
//       document.removeEventListener("keydown", keyPress);
//       document.removeEventListener("click", clickOutside);
//       closeMenu();
//     };
//   }, []);

//   // useLayoutEffect(() => {
//   //   window.addEventListener('click', forceUpdate);

//   //   return () => window.removeEventListener('click', forceUpdate);
//   // }, []);

//   const openMenu = () => {
//     document.body.classList.add("off-nav-is-active");
//     nav.current.style.maxHeight = nav.current.scrollHeight + "px";
//     setIsactive(true);
//   };

//   const closeMenu = () => {
//     document.body.classList.remove("off-nav-is-active");
//     nav.current && (nav.current.style.maxHeight = null);
//     setIsactive(false);
//   };

//   const logout = () => {
//     document.body.classList.remove("off-nav-is-active");
//     nav.current && (nav.current.style.maxHeight = null);
//     setIsactive(false);
//     localStorage.removeItem("uid");
//     localStorage.removeItem("signup");
//   };

//   const profile = () => {
//     document.body.classList.remove("off-nav-is-active");
//     nav.current && (nav.current.style.maxHeight = null);
//     setIsactive(false);
//   };

//   const keyPress = (e) => {
//     isActive && e.keyCode === 27 && closeMenu();
//   };

//   const clickOutside = (e) => {
//     if (!nav.current) return;
//     if (
//       !isActive ||
//       nav.current.contains(e.target) ||
//       e.target === hamburger.current
//     )
//       return;
//     closeMenu();
//   };

//   const classes = classNames(
//     "site-header",
//     bottomOuterDivider && "has-bottom-divider",
//     className
//   );

//   const changeLanguage = (e) => {
//     window.changeLanguage(e.target.dataset.language);
//     window.addEventListener("click", forceUpdate);
//   };

//   const imgLoader = ({ src }) => {
//     return "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
//   };

// END NAVBAR //
// NEW NAVBAR //

  
      // <AppBar position="static" elevation={0}>
      //   <Toolbar disableGutter>
      //     <Grid container justifyContent="space-between">
      //       {/* logo */}
      //       <Grid item xs={4}>
      //         <Image
      //           loader={imgLoader}
      //           src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      //           alt=""
      //           width={50}
      //           height={50}
      //         />
      //       </Grid>

      //       <Grid item xs={6}>
      //         <Grid item container justifyContent="flex-end" alignItems="center">
      //           <Grid item xs={2}>
      //             <Link href="/">Home</Link>
      //           </Grid>
      //           <Grid item xs={2}>
      //             <Link href="/login">Login</Link>
      //           </Grid>
      //           <Grid item xs={2}>
      //             <Link href="/about">About</Link>
      //           </Grid>
      //           <Grid item xs={2}>
      //             <Link href="/signup">Sign up</Link>
      //           </Grid>
      //         </Grid>
      //       </Grid>
      //     </Grid>
      //   </Toolbar>
      // </AppBar>
      // const useStyles = makeStyles((theme) => ({
      //   navlinks: {
      //     marginLeft: theme.spacing(10),
      //     display: "flex",
      //   },
      //  logo: {
      //     flexGrow: "1",
      //     cursor: "pointer",
      //   },
      //   link: {
      //     textDecoration: "none",
      //     color: "white",
      //     fontSize: "20px",
      //     marginLeft: theme.spacing(20),
      //     "&:hover": {
      //       color: "yellow",
      //       borderBottom: "1px solid white",
      //     },
      //   },
      // }));
// const Header=()=>{
//   const useStyles = makeStyles((theme) => ({
//       navlinks: {
//         marginLeft: theme.spacing(10),
//         display: "flex",
//       },
//      logo: {
//         flexGrow: "1",
//         cursor: "pointer",
//       },
//       link: {
//         textDecoration: "none",
//         color: "white",
//         fontSize: "20px",
//         marginLeft: theme.spacing(20),
//         "&:hover": {
//           color: "yellow",
//           borderBottom: "1px solid white",
//         },
//       },
//     }));
// const classes= useStyles()
//   return(
//     <AppBar position="static">
//     <CssBaseline />
//     <Toolbar>
//       <Typography variant="h4" className={classes.logo}>
//         Navbar
//       </Typography>
//         <div className={classes.navlinks}>
//           <a to="/" className={classes.link}>
//             Home
//           </a>
//           <a to="/about" className={classes.link}>
//             FAQ
//           </a>
//           <a to="/contact" className={classes.link}>
//             Contact
//           </a>
//           <a to="/faq" className={classes.link}>
//             FAQ
//           </a>
//         </div>
//     </Toolbar>
//   </AppBar>  
  
// // Header.propTypes = propTypes;
// // Header.defaultProps = defaultProps;
//   )}
// export default Header;
import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image'; 
import Link from 'next/link';
const Header = () => {
  return (
<>
<nav class="navbar navbar-expand-lg display-d">
<Image src={require("../../images/logo-right.jpg").default} width="30px" height="30px"/>
 <div class="collapse bg navbar-collapse " id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home<span class="sr-only"></span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">FAQ</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Policy</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Terms</a>
    </li>
    <li class="nav-item">
      <Link href='/login'>
    <Button className='button-1 !important'  variant='contained' sx={{color:"black !important",background:"#E2C76E !important",marginTop: "3px !important", padding:"4px 16px !important"}}>Sign out </Button>
  </Link>  </li>
  </ul>
</div>
</nav>


{/* Mobile view */}


    <div className='row display'>
      <div className='col-12 bg-color-nav'>
      <nav>

        <div class="pos-f-t bg-color-nav">
  <div class="collapse " id="navbarToggleExternalContent">
    <div class="bg-dark p-4 d-flex justify-content-center">
    <ul class="navbar-nav list-for-list">
      <li class="nav-item active">
        <a class="" href="#">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="" href="#">FAQ</a>
      </li>
      <li class="nav-item">
        <a class="" href="#">Policy</a>
      </li>
      <li class="nav-item">
        <a class="" href="#">Terms</a>
      </li>
      <li class="nav-item">
      <Button className='button-1 !important' variant='contained' sx={{color:"black !important",background:"#E2C76E !important"}}>Sign out </Button>
      </li>
    </ul>
    </div>
  </div>
  <nav class="navbar navbar-dark d-flex justify-content-end pd-4 bg-dark">

      <button class="navbar-toggler pd-0" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
    </button>
  </nav>

      </div>
</nav>
  

    </div>
    
</div>


</>
         
       );
};
export default Header;
