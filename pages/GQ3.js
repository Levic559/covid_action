import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../comps/Page'
import ChatBubble from '../comps/ChatBubble'
import QuizOption from '../comps/QuizOptions'
import Avatar from '../comps/Spaeker'
import Button from '../comps/Button'
import SurveyComponent3 from '../comps/survey/Survey3.jsx'


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
const PageCont =styled.div`
display: flex;
flex-direction:column;
align-items:center

`
const Question = styled.div`
    display:inline-flex;
    align-items:center;
`
const SurveyCont= styled.div`
  position:absolute;
  z-index:1;
  justify-content:center;
  margin-top:150px;
`

export default function Home() {

  const [menustate, setMenuState] = useState(false);
  var right=0;
  if (menustate === true)
  {
    right=178;
  }


const OpenMenu = () => {
  setMenuState(!menustate);
}


  console.log(menustate, right)
  return (<MainCont>
    <UpperLayer>
      <Page right={right}>
        <PageCont>
        <Banner text="Government Policies - Quiz" onClick={OpenMenu} routeTo="/infoQuizOptionsBase" />
        
        <ChatBubble display="none"/>
        <SurveyCont>
        <SurveyComponent3/>
        </SurveyCont>
        <Avatar/>
        

        </PageCont>
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
