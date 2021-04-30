import Banner from '../../comps/Banner';
import HamburgerMenu from '../../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../../comps/Page'
import ChatBubble from '../../comps/ChatBubble'
import NavButton from '../../comps/NavButton'
import {info} from '../../data/General';

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


  const [head, setHead] = useState(info.one.head);
  const [text, setText] = useState(info.one.text);
  const [src, setSrc] = useState(info.one.src);
  const [display, setDisplay] = useState(info.one.display);
  const [bgcolor1, setC1] = useState(info.one.bgcolor1)
  const [bgcolor2, setC2] = useState(info.one.bgcolor2)
  const [bgcolor3, setC3] = useState(info.one.bgcolor3)
  const [bgcolor4, setC4] = useState(info.one.bgcolor4)
  const [bgcolor5, setC5] = useState(info.one.bgcolor5)
  const [bgcolor6, setC6] = useState(info.one.bgcolor6)
  var page = 1;
  const nextInfo = () => {
    page++;
    if (page == 2)
    {
        setHead(info.two.head);
        setText(info.two.text);
        setSrc(info.two.src);
        setDisplay(info.two.display);
        setC1(info.two.bgcolor1);
        setC2(info.two.bgcolor2);
        setC3(info.two.bgcolor3);
        setC4(info.two.bgcolor4);
        setC5(info.two.bgcolor5);
        setC6(info.two.bgcolor6);
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
    console.log("page " + page)
  }




const OpenMenu = () => {
  setMenuState(!menustate);
}

  return (<MainCont>
    <UpperLayer>
      <Page right={right}>

        <Banner text="General Info" onClick={OpenMenu} routeTo="/infoCovidBase"/>

        <ChatBubble 
          head={head}
          text={text}
          src={src}
        />

        <SpeakerContainer>
          <Speaker src="/doctor-hand.svg" />
        </SpeakerContainer>

        <NavContainer>
          <NavButton 
            bgcolor1={bgcolor1}
            bgcolor2={bgcolor2}
            bgcolor3={bgcolor3}
            bgcolor4={bgcolor4}
            bgcolor5={bgcolor5}
            bgcolor6={bgcolor6}
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
