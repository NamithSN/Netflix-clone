import React from 'react'
import styled from'styled-components'

const Backgroundimage = () => {
  return (
    <BackgroudContainer>
        <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg' alt='No Internet Connection'></img>
    </BackgroudContainer>
  )
}

const BackgroudContainer=styled.div`
     height:100vh;
     width: 100vw;
     img{
        height: 100vh;
        width: 100vw;
     }
`

export default Backgroundimage