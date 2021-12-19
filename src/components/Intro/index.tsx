import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Layout, Background } from './style';


const Intro: React.FC  = () => {
    const {navbarColor}= useContext(ThemeContext)
    return (
        <>
            <Background color={navbarColor}/>
            <Layout color={navbarColor}>
            </Layout>
        </>
    )
}

export default Intro;