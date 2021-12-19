import React, { useContext } from 'react';
import NameButton from '../NameButton/nameButton';
import LinkedinButton from '../LinkedinButton/index';
import GithubButton from '../GithubButton/index';
import { NavbarStyle } from './style';
import { ThemeContext } from 'styled-components';

const Navbar: React.FC = () => {
    const {navbarColor, navbarIconsColor}= useContext(ThemeContext)
    return (
        <NavbarStyle color={navbarColor}>
             <NameButton />
            <GithubButton color={navbarIconsColor}/>
            <LinkedinButton color={navbarIconsColor}/>
        </NavbarStyle>
           
    )
}

export default Navbar;