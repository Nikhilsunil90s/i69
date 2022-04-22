/* eslint-disable react/no-unescaped-entities */
// import React, { Component } from "react";
// import Link from "next/link";
// import { withStyles } from "@material-ui/core/styles";
// import { register } from "../styles/RegistrationStyles";
// import InputAdornment from "@material-ui/core/InputAdornment";

// import CssBaseline from "@material-ui/core/CssBaseline";
// import Paper from "@material-ui/core/Paper";
// import Avatar from "@material-ui/core/Avatar";
// import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
// import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
// import Snackbar from "@material-ui/core/Snackbar";
// import SnackbarContent from "@material-ui/core/SnackbarContent";
// import IconButton from "@material-ui/core/IconButton";
// import ErrorIcon from "@material-ui/icons/Error";
// import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
// import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
// import CloseIcon from "@material-ui/icons/Close";
// // import withFirebaseAuth from "react-with-firebase-auth";
// // import firebase from "firebase/app";
// // import firebaseConfig from "../common/firebaseConfig";

// // Add the Firebase services that you want to use
// // import "firebase/auth";
// // import "firebase/firestore";
// import MetaTags from "../components/meta/meta";
// import Header from "../components/Navbar";
// import Footer from "../components/Footer";

// class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//     passwordConfrim: "",
//     hidePassword: true,
//     error: null,
//     errorOpen: false,
//   };

//   errorClose = (e) => {
//     this.setState({
//       errorOpen: false,
//     });
//   };

//   handleChange = (name) => (e) => {
//     this.setState({
//       [name]: e.target.value,
//     });
//   };

//   passwordMatch = () => this.state.password === this.state.passwordConfrim;

//   showPassword = () => {
//     this.setState((prevState) => ({ hidePassword: !prevState.hidePassword }));
//   };

//   isValid = () => {
//     if (this.state.email === "") {
//       return false;
//     }
//     return true;
//   };
//   login = (e) => {
//     e.preventDefault();
//     const newUserCredentials = {
//       email: this.state.email,
//       password: this.state.password,
//     };
//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     } else {
//       firebase.app(); // if already initialized, use that one
//     }
//     console.log("this.props.newUserCredentials", newUserCredentials);
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(this.state.email, this.state.password)
//       .then((data) => {
//         // Signed in
//         // ...
//         console.log("sadfasdfasdf===>", data.user.uid);
//         localStorage.setItem("uid", data.user.uid);

//         alert("Login success!");
//         this.props.history.push("/");
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         alert(errorMessage);
//         // ..
//       });

//     //dispath to userActions
//   };

//   loginWithGoogle = (e) => {
//     e.preventDefault();

//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     } else {
//       firebase.app(); // if already initialized, use that one
//     }
//     var provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then((result) => {
//         /** @type {firebase.auth.OAuthCredential} */
//         var credential = result.credential;

//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         console.log("sadfasdfasdf===>", user.uid);
//         localStorage.setItem("uid", user.uid);
//         firebase
//           .database()
//           .ref("users/" + user.uid)
//           .set({
//             name: user.displayName,
//           });
//         alert("Login success!");
//         this.props.history.push("/");
//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         alert(errorMessage);
//         // ...
//       });

//     //dispath to userActions
//   };

//   loginWithFacebook = (e) => {
//     e.preventDefault();

//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     } else {
//       firebase.app(); // if already initialized, use that one
//     }
//     var provider = new firebase.auth.FacebookAuthProvider();
//     provider.addScope("user_birthday");
//     provider.setCustomParameters({
//       display: "popup",
//     });
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then((result) => {
//         // Signed in
//         var user = result.user;
//         console.log("sadfasdfasdf===>", user);
//         localStorage.setItem("uid", user.uid);
//         firebase
//           .database()
//           .ref("users/" + user.uid)
//           .set({
//             name: result.additionalUserInfo.profile.name,
//           });
//         alert("Login success!");
//         this.props.history.push("/");
//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         alert(errorMessage);
//         // ...
//       });

//     //dispath to userActions
//   };

//   loginWithTwitter = (e) => {
//     e.preventDefault();

//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     } else {
//       firebase.app(); // if already initialized, use that one
//     }
//     var provider = new firebase.auth.TwitterAuthProvider();
//     provider.setCustomParameters({
//       display: "popup",
//     });
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then((result) => {
//         /** @type {firebase.auth.OAuthCredential} */
//         var credential = result.credential;

//         // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
//         // You can use these server side with your app's credentials to access the Twitter API.
//         var token = credential.accessToken;
//         var secret = credential.secret;

//         // The signed-in user info.
//         var user = result.user;
//         console.log("sadfasdfasdf===>", user);
//         localStorage.setItem("uid", user.uid);
//         firebase
//           .database()
//           .ref("users/" + user.uid)
//           .set({
//             name: result.additionalUserInfo.profile.name,
//           });
//         alert("Login success!");
//         this.props.history.push("/");
//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         alert(errorMessage);
//         // ...
//       });

//     //dispath to userActions
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <>
//         <MetaTags title={"i69 | Login"} />
//         <Header />
//         <div className={classes.main}>
//           {/* <CssBaseline /> */}

//           <Paper className={classes.paper}>
//             <form className={classes.form} onSubmit={() => this.login}>
//               <FormControl required fullWidth margin="normal">
//                 <InputLabel htmlFor="email" className={classes.labels}>
//                   Email
//                 </InputLabel>
//                 <Input
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   className={classes.inputs}
//                   disableUnderline={true}
//                   onChange={this.handleChange("email")}
//                 />
//               </FormControl>

//               <FormControl required fullWidth margin="normal">
//                 <InputLabel htmlFor="password" className={classes.labels}>
//                   Password
//                 </InputLabel>
//                 <Input
//                   name="password"
//                   autoComplete="password"
//                   className={classes.inputs}
//                   disableUnderline={true}
//                   onClick={this.state.showPassword}
//                   onChange={this.handleChange("password")}
//                   type={this.state.hidePassword ? "password" : "input"}
//                   endAdornment={
//                     this.state.hidePassword ? (
//                       <InputAdornment position="end">
//                         <VisibilityOffTwoToneIcon
//                           fontSize="default"
//                           className={classes.passwordEye}
//                           onClick={this.showPassword}
//                         />
//                       </InputAdornment>
//                     ) : (
//                       <InputAdornment position="end">
//                         <VisibilityTwoToneIcon
//                           fontSize="default"
//                           className={classes.passwordEye}
//                           onClick={this.showPassword}
//                         />
//                       </InputAdornment>
//                     )
//                   }
//                 />
//               </FormControl>
//               <Button
//                 disabled={!this.isValid()}
//                 disableRipple
//                 fullWidth
//                 variant="outlined"
//                 className={classes.button}
//                 type="submit"
//                 onClick={this.login}
//               >
//                 Login
//               </Button>
//             </form>

//             <Button
//               disableRipple
//               fullWidth
//               variant="outlined"
//               className={classes.socialbutton}
//               type="submit"
//               onClick={this.loginWithGoogle}
//             >
//               Login with Google
//             </Button>
//             <Button
//               disableRipple
//               fullWidth
//               variant="outlined"
//               className={classes.socialbutton}
//               type="submit"
//               onClick={this.loginWithFacebook}
//             >
//               Login with Facebook
//             </Button>
//             <Button
//               disableRipple
//               fullWidth
//               variant="outlined"
//               className={classes.socialbutton}
//               type="submit"
//               onClick={this.loginWithTwitter}
//             >
//               Login with Twitter
//             </Button>

//             <p className="text-center my-3">
//               Don't have an account?{" "}
//               <Link
//                 href="/signup"
//                 className="text-blue-500 hover:text-blue-600"
//               >
//                 Sign up here
//               </Link>{" "}
//               <br />{" "}
//               <Link href="/reset" className="text-blue-500 hover:text-blue-600">
//                 Forgot Password?
//               </Link>
//             </p>
//             {this.state.error ? (
//               <Snackbar
//                 variant="error"
//                 key={this.state.error}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "center",
//                 }}
//                 open={this.state.errorOpen}
//                 onClose={this.errorClose}
//                 autoHideDuration={3000}
//               >
//                 <SnackbarContent
//                   className={classes.error}
//                   message={
//                     <div>
//                       <span style={{ marginRight: "8px" }}>
//                         <ErrorIcon fontSize="large" color="error" />
//                       </span>
//                       <span> {this.state.error} </span>
//                     </div>
//                   }
//                   action={[
//                     <IconButton
//                       key="close"
//                       aria-label="close"
//                       onClick={this.errorClose}
//                     >
//                       <CloseIcon color="error" />
//                     </IconButton>,
//                   ]}
//                 />
//               </Snackbar>
//             ) : null}
//           </Paper>
//         </div>
//         <Footer />
//       </>
//     );
//   }
// }

// export default withStyles(register)(Login);

import React, { useState } from "react";
import Image from 'next/image'
import logoblack from "../images/logo-black.png"
import Header from '../components/Navbar/index'
import Footer from '../components/FooterBar'
import { gql, useQuery } from '@apollo/client';



const login=()=>{
    const [creds, setCreds] = useState({email: '', password: ''});
    const onCredsChange = (e) => {
        setCreds(prev => ({...prev, [e.target.name] : e.target.value}));
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        alert(`${creds.email} - ${creds.password}`)
    }

    const query= gql`
          query Countries {
            countries {
              code
              name
              emoji
            }
          }
        `

      const {data,loading,error}=useQuery(query)
      console.log(data,loading,error,"hy");

return(
  <>
<Header />

    <div id="login-container">
        <div id="divhtml " className="div-curve ">
            <Image src={logoblack} id="logo" alt="" />
            
            <h2 className="font-weight-bold color-text">iSixtyNine</h2>
            <p className="font-weight-bold color-text">Connecting Hearts</p>
        
        </div>
       <form className="ep-box" autoComplete="off" onSubmit={onFormSubmit}>
           <label className="text-center ">Login </label>
           <input type="email" name="email" value={creds.email} placeholder="Email" onChange={onCredsChange}  />
           <input type="password" name="password" value={creds.password} placeholder="Password" onChange={onCredsChange}  />
           <div className="mx-auto">
            <button className="btn" type="submit">Submit</button>
           </div>
       </form>
        <div className="pt-5 px-3">
            <button className="global-btn-2 mt-3"><i class="fa fa-facebook"></i> <span>LOGIN WITH FACEBOOK</span> </button>
            <button className="global-btn-2 mt-3"><i class="fa fa-twitter"></i> <span>LOGIN WITH TWITTER</span> </button>
            <button className="global-btn-2 mt-3"><i class="fa fa-google"></i> <span>LOGIN WITH GOOGLE</span> </button>
        </div>
        <p className="p footer-text">We don't post anything to Facebook and Linkedin, By signing in, you agree with our <a href="">Term and Conditions</a> and <a href="">Privacy Policy</a></p>
    </div>
   <Footer /> 
  </>
)
}
export default login;