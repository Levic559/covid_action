//Hamburger Menu for Adrian
import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const HamburgerContainer = styled.div `
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    width:178px;
    height: 896px;
    background-color: #C4C4C4;
    align-items:center;
`

const LinkContainer = styled.div `
    color: #545454;
    font-size: 20px;
    font-family: 'Roboto';
    font-weight: bold;
    display:flex;
    flex-direction:container;
`
const Divider = styled.div `
    background-color: #545454;
    width:100%;
    height: 9px;
`


const HamburgerMenu = ({
    // props
}) => {
    return <HamburgerContainer>
        <LinkContainer>
            Home
        </LinkContainer>
        <Divider />

        <LinkContainer>
            General Info
        </LinkContainer>
        <Divider />

        <LinkContainer>
            Vaccine Info
        </LinkContainer>
        <Divider />

        <LinkContainer>
            Government Policies
        </LinkContainer>
        <Divider />

        <LinkContainer>
            Take Action
        </LinkContainer>
    </HamburgerContainer>
}

export default HamburgerMenu;