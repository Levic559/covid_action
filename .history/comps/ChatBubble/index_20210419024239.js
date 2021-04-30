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
    bottom:10px;
    overflow:hidden;
`

const Content = styled.div`
    width:100%;
    height:100;
    margin-left:30px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`
const Question = styled.div`
    font-size:16px;
    font-weight:bold;
`

const Answer = styled.div`
    font-size:16px;
`

const Image = styled.div`
    width: 240px;
    height: 240px;
    overflow: hidden;
    align-self:center;
`


const ChatBubble = ({
    head="Heading",
    text="contents",
    src="/wuhan.svg"
}) => {
    return <ChatContainer>
        <Bubble>
            <Content>
                <Question>{head}</Question>
                <Answer>{text}</Answer>
                
                <Image>
                    <img src={src} />
                </Image>

            </Content>
        </Bubble>

        <Triangle />
    </ChatContainer>
}

export default ChatBubble;