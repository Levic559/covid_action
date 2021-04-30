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
    display:flex;
    flex-direction: column;
    justify-content
`

const ChatBubble = ({
    head="Heading",
    text="contents",
}) => {
    return <ChatContainer>

    </ChatContainer>
}