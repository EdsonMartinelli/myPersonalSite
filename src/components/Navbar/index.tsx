import React, { useContext } from 'react';
import { NavbarStyle, ButtonGroupStyle, ButtonWithoutBorder, ButtonWithBorder, NameLogo} from './styles';
import { ReactComponent as IconGithub } from "../../assets/github-icon.svg"
import { ReactComponent as IconLinkedin } from "../../assets/linkedin-icon.svg"
import { ReactComponent as IconMoon } from "../../assets/moon-icon.svg"
import { ReactComponent as IconSun } from "../../assets/sun-icon.svg"
import { ThemeContext } from 'styled-components';

interface changeThemeButton {
    darkTheme: Function
    lightTheme: Function
}

const Navbar: React.FC <changeThemeButton> = ({darkTheme, lightTheme}) => {
    const {navbarColor, navbarIconsColor}= useContext(ThemeContext)
    return (
        <NavbarStyle color={navbarColor}>
            <NameLogo color={navbarIconsColor}> Edson Martinelli </NameLogo>

            <ButtonGroupStyle>
                <ButtonWithBorder onClick={ () => lightTheme() } color={navbarIconsColor}>
                    <IconSun/>
                </ButtonWithBorder>
                <ButtonWithBorder onClick={ () => darkTheme() } color={navbarIconsColor}>
                    <IconMoon/>
                </ButtonWithBorder>
                <ButtonWithoutBorder href="https://github.com/EdsonMartinelli" color={navbarIconsColor}>
                    <IconGithub/>
                </ButtonWithoutBorder>
                <ButtonWithBorder href="https://www.linkedin.com/in/edson-martinelli-420305220/" color={navbarIconsColor}>
                    <IconLinkedin/>
                </ButtonWithBorder>
            </ButtonGroupStyle>
        </NavbarStyle>
           
    )
}

export default Navbar;