import Google from "../../assets/google1.png";
import Facebook from "../../assets/facebook.png";
import Github from "../../assets/github.png";
import { loginCall } from "../../apiCalls";
import "./login.css"
import React, { useRef ,useContext,useState,useEffect} from 'react'
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import axios from 'axios'
import googleimg from '../../assets/glogo.png'
import facebookimg from '../../assets/flogo.png'
// import Modal from "react-bootstrap/Modal"



const Login = () => {
  const history = useHistory()
  const email = useRef()
  const password = useRef()
  // const [user , setUser]=useState({}) 
  const { isFetching, dispatch } = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/user`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // },);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value ,password:password.current.value},
      dispatch
    );
  };


  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div class="modal fade">
    <div class="login-form">
    <form onSubmit={handleClick}>
      <h1>Login</h1>
      <div class="form-group">
        <input type="email" name="email" placeholder="E-mail Address" ref={email}/>
        <span class="input-icon"><i class="fa fa-envelope"></i></span>
      </div>
      <div class="form-group">
        <input type="password" name="psw" placeholder="Password" ref={password}/>
        <span class="input-icon"><i class="fa fa-lock"></i></span>
      </div>      
      <button class="login-btn" disabled={isFetching}>Login</button>      
      <a class="reset-psw" href="#">Forgot your password?</a>
      <div class="seperator"><b>or</b></div>
      <p>Sign in with your social media account</p>
      <div class="google">
      <button onClick={google}><img src={googleimg} />Sign in with Google</button>
      <button onClick={facebook}>
        <img style={{width:'20px',
      position:'absolute',
      top:'170px',
      left:'80px'}} src={facebookimg} />Sign in with Facebook</button>
      </div>
    </form>
  </div>
  </div>
  )};
    
    export default Login;


    //      <Modal>
    //     <div className="login ">
    //       <h1 className="loginTitle">Choose a Login Method</h1>
    //       <div className="wrapper">
    //         <div className="left">
    //           <div className="loginButton google" onClick={google}>
    //             <img src={Google} alt="" className="icon" />
    //             Google
    //           </div>
    //           <div className="loginButton facebook" onClick={facebook}>
    //             <img src={Facebook} alt="" className="icon" />
    //             Facebook
    //           </div>
    //           <div className="loginButton github" onClick={github}>
    //             <img src={Github} alt="" className="icon" />
    //             Github
    //           </div>
    //         </div>
    //         <div className="center">
    //           <div className="line" />
    //           <div className="or">OR</div>
    //         </div>
    //         <div className="right">
    //           <input type="text" placeholder="Email" ref={email}/>
    //           {/* <input type="text" placeholder="Password" /> */}
    //           <button className="submit" onClick={handleClick}>Login</button>
    //         </div>
    //       </div>
    //     </div>
    //      </Modal>
    //   );
    // };
