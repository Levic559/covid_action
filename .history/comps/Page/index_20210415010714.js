import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner'

const PageComponent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    right: ${props=>props.right}px;
    transition: right 1s;
    background-color: #F2E4D4;
`

const Page = ({
    right=0
}) => {
    return <PageComponent right={right} ></PageComponent>
}

export default Page;