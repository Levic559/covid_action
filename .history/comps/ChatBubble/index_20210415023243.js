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
    background: url("");
`

const ChatBubble = ({
    head="Heading",
    text="contents",
}) => {
    return <ChatContainer>
        <Bubble />
        <
    </ChatContainer>
}