import React, {useState} from 'react'
import TopNav from '../components/TopNav'
import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {faPlay} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate= useNavigate()
 
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled)
  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          className="background-image"
          src="https://tamil.behindwoods.com/tamil-movies-cinema-news-ta/images/kamal-haasan-vikram-movie-official-release-date-photos-pictures-stills.jpeg"
          alt="hero image"
        />
        <div className="container">
          <div className="title">
            <h1>Vikram</h1>
          
          </div>
          <div className="buttons">
            <button className='playbtn' onClick={()=>navigate('/player')}>
              Trailer
            </button>
            <button className="morebtn">More</button>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};
 
const HeroContainer = styled.div`
.hero {
  position: relative;
  .background-image {
    filter: brightness(90%);
  }
  img {
    height: 70vh;
    width: 100%;
  }
  .container {
    position: absolute;
    bottom: 1rem;
    .title {
      h1 {
        margin-left: 5rem;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-size: 73px;
        background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        margin-bottom: -60px;
        width: 640px;
        margin-left: 5rem;
        font-family: "lexend Deca", sans-serif;
        color: white;
      }
    }
    .buttons {
      display: flex;
      margin: 5rem;
      gap: 2rem;
    }

    .playbtn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: red;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      cursor: pointer;
    }
    .morebtn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: black;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: 0.1rem solid white;
      cursor: pointer;
    }
  }
}
`;
export default Netflix