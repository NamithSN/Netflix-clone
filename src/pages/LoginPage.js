import React, {useState} from "react"
import Header from '../components/Header'
import BackgroundImage from '../components/Backgroundimage'
import styled from 'styled-components'
import {signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth"
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const  LoginPage=() =>{
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")

  const navigate= useNavigate()
  const handleLogin=async()=>{
    try {
      await signInWithEmailAndPassword(firebaseAuth,email,password)
    } catch (error) {
      console.log(error);
    }
  };
 onAuthStateChanged(firebaseAuth, (currentUser) =>{
    if(currentUser) navigate('/')
  })
  return (
    <Wrapper>
      <BackgroundImage></BackgroundImage>
      <div className="logincontent">
        <Header/>
        <div className="form-wrapper">
        <div className="form">
        <div className="title" >
          <h1>login</h1>
        </div>
        <div className="container">
          <input type="text" placeholder="email"
           onChange={(e) => setEmail(e.target.value)} value={email}>
          </input>
          <input type="password" placeholder="password"
          onChange={(e) => setPassword(e.target.value)} value={password}>
          </input>
          <button onClick={handleLogin}>login</button>
        </div>
        </div>
      </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
.logincontent{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.4);
  height: 100vh;
  width: 100vw;
  grid-template-columns: 15vh 85vh;
}
.form-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 85vh;
  }
  .form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: black;
  height: 70vh;
  padding:2rem;
  color: white;
  border-radius: 0.4rem;
  }
  .container{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input{
    border-radius: 0.4rem;
    padding: 0.5rem 1rem;
    outline: none;
    width: 25rem;
    height: 2.4rem;
  }
  button{
    padding: 0.5rem;
    background-color: red;
    border: none;
    cursor: pointer;
    border-radius: 0.4rem;
    height: 3.4rem;
    width: 27rem;
    color: white;
    font-size: bolder;
    font: 1.05rem;
  }

  }
`
export default LoginPage