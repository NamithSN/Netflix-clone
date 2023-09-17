import React, {useState}from 'react'
import styled from 'styled-components'
import { Navigate, useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

export default React.memo(function ({movieData}) {
    const [onHovered, setOnHovered]=useState(false)
    const navigate=useNavigate()
  return (
    <CardContainer
    onMouseEnter={()=>setOnHovered(true)}
    onMouseLeave={()=>setOnHovered(false)}
    >
        <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt='Movie Poster'
        onClick={()=>navigate('/player')}
        />
        {
            onHovered &&(
            <div className='hover'>
                <div className='img-video-wrapper'>
                <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
            onClick={()=>navigate('/player')}/>
            <ReactPlayer className='ReactPlayer' url='https://www.youtube.com/watch?v=NXSigiaZ0W0' playing height='100%' width='100%' />
                </div>
                <div className='info-container'>
                    <h3 className='movie-name' onClick={()=>navigate('/palyer')}>
                        {movieData.name}
                    </h3>
                    <div className='icons'>
                        <div className='controls'>
                            <IoPlayCircleSharp  title='play' onClick={()=>navigate('/palyer')}/>
                            <RiThumbUpFill title='like'/>
                            <RiThumbDownFill title='Dislike'/>
                            <BsCheck title='remove from list'/>
                            <AiOutlinePlus title='Add to the list'/>
                        </div>
                        <div className='info'>
                            <BiChevronDown title='More info'/>
                        </div>

                    </div>
                    <div className='genres'>
                        <ul>
                {movieData.genres.map((genre)=>{
                  <li>{genre}</li>
                })}
              </ul>

                    </div>

                </div>
            </div>
            
            )
        }
    </CardContainer>
  )
})
const CardContainer=styled.div`
margin-top: 1rem;
max-width: 230px;
width: 230px;
height: 100%;
cursor: pointer;
position: relative;
img{
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
}
.hover{
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.2rem;
    border: 0.1rem solid gray;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .img-video-wrapper{
        position: relative;
        height: 140px;
        img{
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
        }
        .ReactPlayer{
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
        }
    }
    .info-container{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 0.5rem;
        .movie-name{
            color: white;
        }
    }
    .icons{
        display: flex;
        justify-content: space-between;
        .controls{
                display: flex;
                gap: 0.5rem;
        }
    svg{
        color: white;
        border: 0.1rem solid white;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover{
            color:red;
        }
    }
}
.genre{
    display: flex;
    color: white;
    ul{
        display: flex;
        gap: 1rem;
        li{
            padding-right: 0.7rem;
            &:first-of-type{
                list-style-type: none;
            }
        }
    }
}
}

`
