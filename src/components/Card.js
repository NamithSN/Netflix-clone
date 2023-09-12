import React, {useState}from 'react'
import styled from 'styled-components'
import { Navigate, useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

const Card = () => {
    const [onHovered, setOnHovered]=useState(false)
    const navigate=useNavigate()
  return (
    <CardContainer
    onMouseEnter={()=>setOnHovered(true)}
    onMouseLeave={()=>setOnHovered(false)}
    >
        <img src='https://tamil.behindwoods.com/tamil-movies-cinema-news-ta/images/kamal-haasan-vikram-movie-official-release-date-photos-pictures-stills.jpeg'
        alt='Movie Poster'
        onClick={()=>navigate('/player')}
        />
        {
            onHovered &&(
            <div className='hover'>
                <div className='img-video-wrapper'>
                <img src='https://tamil.behindwoods.com/tamil-movies-cinema-news-ta/images/kamal-haasan-vikram-movie-official-release-date-photos-pictures-stills.jpeg'
            alt='Movie Poster'
            onClick={()=>navigate('/player')}/>
            <ReactPlayer url='https://www.youtube.com/watch?v=NXSigiaZ0W0' playing height='100%' width='100%' />
                </div>
                <div className='info-container'>
                    <h3 className='movie name' onClick={()=>navigate('/palyer')}>Vikram</h3>
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
                    <div className='genre'>
                        <ul>
                            <li>Action</li>
                            <li>Action</li>
                            <li>Action</li>
                        </ul>

                    </div>

                </div>
            </div>
            
            )
        }
    </CardContainer>
  )
}
const CardContainer=styled.div`
/* max-width: 230px; */
background-color: red;

`
export default Card