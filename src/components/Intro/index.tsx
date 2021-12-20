import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Layout, Background } from './style';

interface PageLoad{
    isPageload: boolean
}

const Intro: React.FC <PageLoad> = ({isPageload}) => {
    const {navbarColor, animationType}= useContext(ThemeContext)
    return (
        <>
            <Background color={navbarColor} />
            <Layout color={ navbarColor } type={ animationType } isPageload={ isPageload }/>
        </>
    )
}

export default Intro;