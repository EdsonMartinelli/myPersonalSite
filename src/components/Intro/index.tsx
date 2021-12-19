import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Background } from './style';


const Intro: React.FC  = () => {
    const {navbarColor}= useContext(ThemeContext)
    return (
        <Background color={navbarColor} />
    )
}

export default Intro;