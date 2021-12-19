import styled from "styled-components";

export const  NavbarStyle = styled.nav<{color : string}>`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: ${props => props.color};
    align-items: center;

`