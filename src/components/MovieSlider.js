import React from 'react'
import Card from './Card'
import styled from 'styled-components'

export default React.memo (function  MovieSlider({data,title}) {
  return (
    <Container>
      <h1>{title}</h1>
      <div className='wrapper'>
    <div className="slider" >
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        </div>
        </Container>
  )
});

const Container=styled.div`
gap:0.7rem;
position: relative;
padding: 0.5rem 0;
h1{
  color: white;
  margin-left: 5px;
  font-size: 25px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.wrapper{
  .slider{
    display: flex;
    width: max-content;
    gap: 0.6rem;
    transform: translateX(0px);
    transition: 1s ease-in-out;
    margin-left: 5px;
  }
}
`

