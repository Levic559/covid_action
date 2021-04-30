//Full bird Icon for Levi
import React from "react";
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from "react-spring";
import Image from 'next/image' 


const show = keyframes`
0%{
  opacity: 0; 
}
25% {
  opacity: 1; 
}
50% {
  opacity: 1; 
}
75% {
  opacity: 1; 
}
100% {
  opacity: 1; 
}

`;
const show2 = keyframes`
0%{
  opacity: 0; 
}
25% {
  opacity: 0; 
}
50% {
  opacity: 1; 
}
75% {
  opacity: 1; 
}
100% {
  opacity: 1; 
}

`;
const show3 = keyframes`
0%{
  opacity: 0; 
}
25% {
  opacity: 0; 
}
50% {
  opacity: 0; 
}
75% {
  opacity: 1; 
}
100% {
  opacity: 1; 
}

`;
const show4 = keyframes`
0%{
  opacity: 0; 
}
25% {
  opacity: 0; 
}
50% {
  opacity: 0; 
}
75% {
  opacity: 0; 
}
100% {
  opacity: 1; 
}

`;

const ImgesCont =styled(animated.div)`
display:flex;
flex-direction:column

`;
const ImgCont2 =styled.img`
width:${(props)=>props.width2}px;
height:auto;
animation: 4s ${show}  1s step-start infinite;
margin-left:45px;
`
const ImgCont3 =styled.img`
width:${(props)=>props.width3}px;
height:auto;
animation: 4s ${show2}  1s step-start infinite;
margin-top:-120px;
margin-left:30px;


`

const ImgCont4 =styled.img`
width:${(props)=>props.width4}px;
height:auto;
animation: 4s ${show3}  1s step-start infinite;
margin-top:-110px;
margin-left:10px;
z-index:2

`
const ImgCont5 =styled.img`
width:${(props)=>props.width5}px;
height:auto;
animation: 4s ${show4}  1s step-start infinite;
margin-top:-30px;
margin-left:10px;
`
const Text1 =styled.p`
font-family:Roboto;
font-size:20px;
font-weight:400;
color: grey;
margin:0;
position:absolute;
background-color:#ffffff;
animation: 4s ${show}  1s step-start infinite;
`
const Text2 =styled.p`
font-family:Roboto;
font-size:20px;
font-weight:400;
color: grey;
margin:0;
position:absolute;
background-color:#ffffff;
width:150px;
animation: 4s ${show2}  5s step-start infinite;
`
const Text3 =styled.p`
font-family:Roboto;
font-size:20px;
font-weight:400;
color: grey;
margin:0;
position:absolute;
background-color:#ffffff;
width:110px;
position:absolute;
animation: 4s ${show3}  9s step-start infinite;

`

//props
const ImageCompV1= ({
 width=250,
 width2=250,
 width3=300,
 width4=350,
 width5=350,
 text1="Day1",
 text2="Day7",
 text3=" Day14"
 
}) => {
 
  return (
    
  <ImgesCont    >
      {/* <Text1> {text1}</Text1>
      <Text2> {text2}</Text2>
      <Text3> {text3}</Text3> */}
      <ImgCont2 src="/pfizer.svg"   width2 ={width2 } />
      <ImgCont3 src="/moderna.svg"   width3 ={width3 } />
      <ImgCont4 src="/astrazeneca.svg"   width4 ={width4 } />
      <ImgCont5 src="/Janssen_Logo.jpg"   width5 ={width5 } />
    </ImgesCont>  
    
  )
}


export default ImageCompV1;
