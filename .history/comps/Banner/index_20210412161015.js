import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BirdLogo from '../BirdLogo';

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
    min-height:50px;
    background-color: #E09EFF;
    color: #545454;
    font-family:'Roboto';
    font-weight: bold;
    font-size: 20px;
    padding:5px;
`

const Banner = ({
    //props
    text="BIRD",
    onClick=()=>{},
    routeTo="/" 
}) => {
    const router = useRouter();
    return <BannerContainer>
        <NavContainer>
            <BackContainer src="/arrow-grey-left.svg" onClick={()=>router.push(routeTo)}/>
            <BirdLogo
                display="none"
                fontSize="30"
                marginTop="0"
                right="4"
            />
            <HamburgerContainer src="/hamburger-menu.svg"/>
        </NavContainer>
        <PurpleBanner>
            {text}
        </PurpleBanner>
    </BannerContainer>
}

export default Banner;