import styled, { keyframes } from "styled-components";

const animation = (color: string) => keyframes`
    from {
       background-color: ${color}; 
       clip-path: circle(2% at 50% 50%);
    }
    to {
        background-color: ${color}; 
        clip-path: circle(100% at 50% 50%);
    }
`

export const Layout = styled.nav<{color : string}>`
    position: absolute;
    padding-top: 100px;
    width: 100%;
    height: 100vh;
    background-color: ${props =>  props.color};
    box-sizing: border-box;
    z-index: -1;
    animation: ${props => animation(props.color)} 1s;
`

export const Background = styled.nav<{color : string}>`
    position: absolute;
    padding-top: 100px;
    width: 100%;
    height: 100vh;
    background-color: ${props =>  props.color == "black" ? "white" : "black"};
    box-sizing: border-box;
    z-index: -2;
`