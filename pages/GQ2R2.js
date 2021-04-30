import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../comps/Page'
import ChatBubble from '../comps/ChatBubble'
import QuizOption from '../comps/QuizOptions'
import Avatar from '../comps/Spaeker'
import Button from '../comps/Button'

//custom tags for base page
const MainCont = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UpperLayer = styled.div `
  width: 414px;
  height: 896px;
  overflow: hidden;
  z-index: 0;
  position: relative;
  left: 212px;
`

const LowerLayer = styled.div`
  width: 414px;
  height: 896px;
  overflow: hidden;
  z-index: -1;
  position: relative;
  right: 202px;
`
const SideBar = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export default function Home() {

  const [menustate, setMenuState] = useState(false);
  var right=0;
  if (menustate === true)
  {
    right=178;
  }
  const SurveyCont= styled.div`
  position:absolute;
  z-index:1;
  justify-content:center;
  margin-top:150px;
`
const Resoult= styled.div`
font-size:65px;
font-weight:400;
color:orange;
justify-content:center;
text-align:center;
margin:50px;
  
`
const Annousement= styled.div`
  font-size:24px;
  font-weight:400;
  color:#c4c4c4;
  justify-content:center;
  text-align:center;
  
`
const Comment= styled.div`
  font-size:24px;
  font-weight:400;
  color:orange;
  justify-content:center;
  text-align:center;
  
`
const Subtitle = styled.div`
font-size:30px;
  font-weight:400;
  color:orange4;
  justify-content:center;
  text-align:center;
  margin:10px;
`
const ButtonBigCont =styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  
  margin-top:50px;
`


const OpenMenu = () => {
  setMenuState(!menustate);
}

  console.log(menustate, right)
  return (<MainCont>
    <UpperLayer>
      <Page right={right}>
        <Banner text="General Information - Quiz" onClick={OpenMenu} />
        
        
        <ChatBubble display="none"/>
        <SurveyCont>
          <Annousement>
            Your resoult:
          </Annousement>
          <Resoult>
           2/3
          </Resoult>
          <Comment>
            <Subtitle>Good job!</Subtitle> Keep studying!
          </Comment>
          <ButtonBigCont>
          <Button  text="Read again" routeTo="/items/VInfo" />
          <Button text="Retake the Quiz" routeTo =  "/GQ2"/>
          </ButtonBigCont>
         
        
        </SurveyCont>
        <Avatar   src="/R2.svg" width="450"/>

        
        


      </Page>
     
    </UpperLayer>

    <LowerLayer>
      <SideBar>
        <HamburgerMenu />
      </SideBar>
    </LowerLayer>
 
    

  </MainCont>

  )
}
