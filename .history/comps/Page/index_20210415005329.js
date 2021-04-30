import React from 'react';
import styled from 'styled-components';

const PageComponent = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    right: ${props=>props.right}px;
    transition: right 1s;
`

const Page = ({
    right=0
}) => {
    return <PageComponent right={right}></PageComponent>
}

export default Page;