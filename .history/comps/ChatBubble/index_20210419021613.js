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
    justify-content:center;
    align-items:center;
    overflow:hidden;
    background-color:white;
`

const Triangle = styled.div`
    background: url("/chat-triangle.svg");
    width:84px;
    height:50px;
    position:relative;
    left: 0px;
    bottom:10px
    overflow:hidden;
`

const Content = styled.div`
    width: 85%;
    height 85%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
`

const ChatBubble = ({
    head="Heading",
    text="contents",
}) => {
    return <ChatContainer>
        <Bubble>
            <Content>
                <h1>hello</h1>
                <p>hello</p>
            </Content>
        </Bubble>

        <Triangle />
    </ChatContainer>
}

export default ChatBubble;