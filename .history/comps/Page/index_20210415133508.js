import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner';
import ChatBubble from '../ChatBubble';

const PageComponent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    right: ${props=>props.right}px;
    transition: right 1s;
    background-color: #F2E4D4;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Page = ({
    right=0,
    
}) => {
    return <PageComponent right={right} >
        <Banner></Banner>
    </PageComponent>
}

export default Page;