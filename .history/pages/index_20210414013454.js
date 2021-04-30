import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import React, {useState} from 'react';

export default function Home () {
  const [menustate, setMenuState] = useState(false);
  var right=0;
  if (menustate === true)
  {
    right=178;
  }
}

const OpenMenu = () => {
    setMenuState(!menustate)
}

export default function Home() {
  return (<div className="main">
    <div className="upper layer">
        <div className="page" style="right: ${right}">
          <Banner text="hello" />
          
        </div>
    </div>

    <div className="lower layer">
      <div className="sidebar">
        <HamburgerMenu /> 
      </div>
    </div>
  </div>)
}
