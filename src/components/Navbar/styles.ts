import styled from "styled-components";

export const NavbarStyle = styled.nav<{color : string}>`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    z-index: 1;
`

export const ButtonGroupStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`

export const ButtonWithoutBorder = styled.a<{color: string}>`
    display: flex;
    align-items: center;

    svg{
        fill: ${props => props.color};
        padding: 4px;
    }
`

export const ButtonWithBorder = styled(ButtonWithoutBorder)<{color: string}>`
    svg{
        padding: 2px;
        border: 2px solid ${props => props.color};
        border-radius: 5px;
    }
`

export const NameLogo = styled.div<{color: string}>`
    color: ${props => props.color}
`