import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../comps/Page'
import ChatBubble from '../comps/ChatBubble'

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

// for speaker only
const SpeakerContainer = styled.div`
  width: 276px;
  height:221px;
  overflow:hidden;
`

const Speaker = styled.img`
  width:100%
  height:100%
  object-fit:cover;
  background:url("/doctor.svg");
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
        <Banner text="hello" onClick={OpenMenu} />
        <ChatBubble />
        <SpeakerContainer>
          <Speaker />
        </SpeakerContainer>
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
