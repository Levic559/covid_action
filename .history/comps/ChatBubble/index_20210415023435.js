import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner'

const ChatContainer = styled.div `
    display:flex;
    flex-direction:column;
`

const Bubble = styled.div `
    width:376px;
    height:480px;
    border-radius: 20px;
`

const Triangle = styled.div`
    background: url("/chat-triangle.svg");
    width:58px;
    height:50px;
`

const ChatBubble = ({
    head="Heading",
    text="contents",
}) => {
    return <ChatContainer>
        <Bubble />
        <Triangle />
    </ChatContainer>
}