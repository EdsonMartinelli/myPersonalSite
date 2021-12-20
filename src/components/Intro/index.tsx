import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { BackgroundLayer0, BackgroundLayer1} from './style';

interface PageLoad{
    isPageload: boolean
}

const Intro: React.FC <PageLoad> = ({isPageload}) => {
    const {navbarColor, animationType}= useContext(ThemeContext)
    return (
        <>
            <BackgroundLayer0 color={ navbarColor }/>
            <BackgroundLayer1 color={ navbarColor } type={ animationType } isPageload={ isPageload }/>
        </>
    )
}

export default Intro;