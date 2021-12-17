import React from 'react';
import { GithubIcon } from './styleGithub';
import { navbarButtonProps as Props } from '../../interfaces/navbarButtons';

const GithubButton: React.FC<Props> = (props) => {
    return (
        <GithubIcon color={props.color}/>
    )
}

export default GithubButton;