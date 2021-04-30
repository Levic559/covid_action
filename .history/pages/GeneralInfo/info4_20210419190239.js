import Banner from '../../comps/Banner';
import HamburgerMenu from '../../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../../comps/Page'
import ChatBubble from '../../comps/ChatBubble'
import NavButton from '../../comps/NavButton'

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
  width: 100%;
  height:100%;

  position:relative;
`

const NavContainer = styled.div`
  position:absolute;
  bottom:260px;
`





export default function Home() {
  //for menu
  const [menustate, setMenuState] = useState(false);
  var right=0;
  if (menustate === true)
  {
    right=178;
  }
  // for content




const OpenMenu = () => {
  setMenuState(!menustate);
}

  return (<MainCont>
    <UpperLayer>
      <Page right={right}>

        <Banner text="General Info" onClick={OpenMenu} routeTo="/infoCovidBase"/>

        <ChatBubble 
          head="4.Who is most at risk of severe illness from COVID-19?
          "
          text="People aged 60 years and over, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, obesity or cancer, are at higher risk of developing serious illness. 

          However, anyone can get sick with COVID-19."
          src="/patient-elderly.svg"
        />

        <SpeakerContainer>
          <Speaker src="/doctor-hand.svg" />
        </SpeakerContainer>

        <NavContainer>
          <NavButton 
            bgcolor4="#FF7A00"
            back="info3"
            next="info5"
          />
        </NavContainer>
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
