import Banner from '../../comps/Banner';
import HamburgerMenu from '../../comps/HamburgerMenu';
import styled from 'styled-components';
import React, {useState} from 'react';
import Page from '../../comps/Page'
import ChatBubble from '../../comps/ChatBubble'
import NavButton from '../../comps/NavButton'
import {info} from '../../data/Vaccine';
import {useRouter} from 'next/router';

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
  bottom:255px;
`




var page=1;


export default function Home() {
    const router = useRouter();
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
  const [bgcolor1, setC1] = useState(info.one.bgcolor1);
  const [bgcolor2, setC2] = useState(info.one.bgcolor2);
  const [bgcolor3, setC3] = useState(info.one.bgcolor3);
  const [bgcolor4, setC4] = useState(info.one.bgcolor4);


  
  
  // for fowraed button
  const nextInfo = () => 
  {
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

    }

    else if (page == 3)
    {
        setHead(info.three.head);
        setText(info.three.text);
        setSrc(info.three.src);
        setDisplay(info.three.display);
        setC1(info.three.bgcolor1);
        setC2(info.three.bgcolor2);
        setC3(info.three.bgcolor3);
        setC4(info.three.bgcolor4);

    }

    else if (page == 4)
    {
        setHead(info.four.head);
        setText(info.four.text);
        setSrc(info.four.src);
        setDisplay(info.four.display);
        setC1(info.four.bgcolor1);
        setC2(info.four.bgcolor2);
        setC3(info.four.bgcolor3);
        setC4(info.four.bgcolor4);

    }

    else if (page == 5)
    {
        router.push("/infoCovidBase")
    }

    console.log("page " + page)
  }

  //for back button
  const backInfo = () => 
  {
    page--;
    
    if (page == 1)
    {
        setHead(info.one.head);
        setText(info.one.text);
        setSrc(info.one.src);
        setDisplay(info.one.display);
        setC1(info.one.bgcolor1);
        setC2(info.one.bgcolor2);
        setC3(info.one.bgcolor3);
        setC4(info.one.bgcolor4);

    }
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

    }

    else if (page == 3)
    {
        setHead(info.three.head);
        setText(info.three.text);
        setSrc(info.three.src);
        setDisplay(info.three.display);
        setC1(info.three.bgcolor1);
        setC2(info.three.bgcolor2);
        setC3(info.three.bgcolor3);
        setC4(info.three.bgcolor4);

    }

    else if (page == 4)
    {
        setHead(info.four.head);
        setText(info.four.text);
        setSrc(info.four.src);
        setDisplay(info.four.display);
        setC1(info.four.bgcolor1);
        setC2(info.four.bgcolor2);
        setC3(info.four.bgcolor3);
        setC4(info.four.bgcolor4);

    }

    else if (page == 5)
    {
        router.push("/infoCovidBase")
    }
    else if (page == 0)
    {
        page =1
    }
    console.log("page " + page)
  }



const OpenMenu = () => {
  setMenuState(!menustate);
}

  return (<MainCont>
    <UpperLayer>
      <Page right={right}>

        <Banner text="Vaccine Info" onClick={OpenMenu} routeTo="/infoCovidBase"/>

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
            display5="none"
            display6="none"
            nextFunction={nextInfo}
            backFunction={backInfo}
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
