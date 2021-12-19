import styled from "styled-components";

export const Background = styled.nav<{color : string}>`
    position: absolute;
    padding-top: 100px;
    width: 100%;
    height: 100vh;
    background-color: ${props =>  props.color};
    box-sizing: border-box;
    transition: all 1s ease;
    clip-path: circle(100% at 50% 50%);
    z-index: -1;
`