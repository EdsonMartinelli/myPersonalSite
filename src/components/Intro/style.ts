import styled, { css, keyframes } from "styled-components";

const leftToRight = keyframes`
    from {
        width: 0%;
        right: 0;
    }
    to {
        width: 100%;
        right: 0;
    }
`

const rightToLeft = keyframes`
    from {
        width: 0%;
        left: 0;
    }
    to {
        width: 100%;
        left: 0;
    }
`

export const Layout = styled.nav<{color: string, type: string, isPageload: boolean}>`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${props =>  props.color};
    box-sizing: border-box;
    z-index: -1;
    ${props =>  props.isPageload === false && css`
        animation: ${props.type === "leftToRight"? leftToRight : rightToLeft} 1s ease
    `
    }
`

export const Background = styled.nav<{color : string}>`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${props =>  props.color === "black" ? "white" : "black"};
    box-sizing: border-box;
    z-index: -2;
`