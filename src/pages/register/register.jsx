import Google from "../../assets/google1.png";
import Facebook from "../../assets/facebook.png";
import Github from "../../assets/github.png";
import { loginCall } from "../../apiCalls";
import "./register.css"
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
  const username = useRef()
  // const [user , setUser]=useState({}) 
  const { isFetching, dispatch } = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/user`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // },);

  const handleClick = async (e) => {
    e.preventDefault();
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    
  };


  const google = () => {
    window.open("http://localhost:5000/api/auth/google", "_self");
  };

  // const github = () => {
  //   window.open("http://localhost:5000/auth/github", "_self");
  // };

  const facebook = () => {
    window.open("http://localhost:5000/api/auth/facebook", "_self");
  };

  return (
    <div class="modal fade">
    <div class="login-form">
    <form onSubmit={handleClick}>
      <h1>Register</h1>
      <div class="form-group">
        <input type="text" name="username" placeholder="username" ref={username}/>
        <span class="input-icon"><i class="fa fa-user"></i></span>
      </div> 
      <div class="form-group">
        <input type="email" name="email" placeholder="E-mail Address" ref={email}/>
        <span class="input-icon"><i class="fa fa-envelope"></i></span>
      </div>     
      <div class="form-group">
        <input type="password" name="psw" placeholder="Password" ref={password}/>
        <span class="input-icon"><i class="fa fa-lock"></i></span>
      </div>      
      <button class="login-btn" disabled={isFetching}>Register</button>      
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