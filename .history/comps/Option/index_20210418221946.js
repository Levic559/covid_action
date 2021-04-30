import React from "react";
import styled from "styled-components";

const Avatarcont = styled.div`
    display:flex;
    flex-direction: column;
    mar
    
`;
const Avatarimage  = styled.img`
    src:${props=>props.src};
    width:${props=>props.width}px;
    height:${props=>props.height}px;
    margin-bottom: -27px;
    border-radius: 10px 10px 10px 10px;
`;
const Avatartext = styled.span`
    background-color: rgba(196,196,196,0.8);
    color: #FFF;
    padding:5px;
    justify-content:center;
    align-items:center;
    border-radius:0px 0px 10px 10px;
    text-align: center;
    font-weight: 800;
`;

const Avatar  = ({
    src = "/1.svg",
    width = 270,
    height= 160,
    text = "General info"
}) =>{
    return <Avatarcont> 
    
    <Avatarimage src = {src} width = {width} height = {height}></Avatarimage>
    <Avatartext>{text}</Avatartext>
    
    </Avatarcont>
}
export default Avatar;