import Banner from '../../comps/Banner';
import HamburgerMenu from '../../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../../comps/Page'
import ChatBubble from '../../comps/ChatBubble'
import NavButton from '../../comps/NavButton'
import info from '../../data/General';

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
  // for navigation


  const [head, setHead] = useState("1. What is COVID-19?");
  const [text, setText] = useState("COVID-19 is the disease caused by a new coronavirus called SARS-CoV-2.  WHO first learned of this new virus on 31 December 2019, following a report of a cluster of cases of ‘viral pneumonia’ in Wuhan, People’s Republic of China.");
  var page = 1;
  const nextInfo = () => {
    page++;
    if (page == 2)
    {
        
    }
    else if (page == 3)
    {

    }
    else if (page == 4)
    {

    }
    else if (page == 5)
    {

    }
    else if (page == 6)
    {

    }
    else if (page == 7)
    {
        page = 6
    }
  }




const OpenMenu = () => {
  setMenuState(!menustate);
}

  return (<MainCont>
    <UpperLayer>
      <Page right={right}>

        <Banner text="General Info" onClick={OpenMenu} routeTo="/infoCovidBase"/>

        <ChatBubble 
          head="5. How long does it take to develop symptoms?
          "
          text="The time from exposure to COVID-19 to the moment when symptoms begin is, on average, 5-6 days and can range from 1-14 days. "
          src="/virus-3.png"
        />

        <SpeakerContainer>
          <Speaker src="/doctor-hand.svg" />
        </SpeakerContainer>

        <NavContainer>
          <NavButton 
            bgcolor5="#FF7A00"
            back="info4"
            next="info6"
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
