import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div `
    display: flex;
    flex-direction: column;
    width:414px;
    height: 100px;
`

const NavContainer = styled.div `
    display:flex;
    justify-content: space-between;
    min-height: 65px;
    width:100%;
    align-items:center;
`

const BackContainer = styled.img `
    position: relative;
    width:34px;
    height:20px;
    left:20px;
`

const BirdContainer = styled.span`
    font-size: 30px;
    font-family: 'Archivo';
    font-weight: bold;
    color: #CC6666;
`

const HamburgerContainer = styled.img `
    position:relative;
    width: 25px;
    height: 20px;
    right:20px;
`

const PurpleBanner = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%
    height:35px;
    background-color: #E09EFF;
    color: #545454;
    font-family:'Roboto';
    font-weight: bold;
`





const Banner = ({
    //props
    text="BIRD"
}) => {
    return <BannerContainer>
        <NavContainer>
            <BackContainer src="/arrow-grey-left.svg" />
            <BirdContainer>BIRD</BirdContainer>
            <HamburgerContainer src="/hamburger-menu.svg"/>
        </NavContainer>
        <PurpleBanner>
            {text}
        </PurpleBanner>
    </BannerContainer>
}

export default Banner;