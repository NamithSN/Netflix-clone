import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player'

const Player = () => {
  const navigate = useNavigate()
  return (
    <PlayContainer>
        <div className='player'>
          <div className='backArrow'>
          <button onClick={()=>navigate(-1)}>Go Back</button>
          </div>
          <ReactPlayer url='https://www.youtube.com/watch?v=NXSigiaZ0W0' playing height='100%' width='100%' />
        </div>
    </PlayContainer>
  )
}
const  PlayContainer = styled.div`
.player{
  width: 100vw;
  height: 100vh;
  .button{
    position: absolute;
    padding:2rem;
    z-index: 1rem;
    cursor: pointer;
    svg{
      font-size:3rem;
      cursor: pointer;
      color: white;
    }
  }
.ReactPlayer{
  width: 100%;
  height: 100%;
}
}
`
export default Player