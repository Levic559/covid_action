import Banner from '../comps/Banner';
import HamburgerMenu from '../comps/HamburgerMenu';
import React, {useState} from 'react';






export default function Home() {



  console.log(menustate)
  return (<div className="main">
    <div className="upper layer">
        <div className="page" style="right: {right}">
          <Banner text="hello" onClick={OpenMenu}  />
          
        </div>
    </div>

    <div className="lower layer">
      <div className="sidebar">
        <HamburgerMenu /> 
      </div>
    </div>
  </div>)
}
