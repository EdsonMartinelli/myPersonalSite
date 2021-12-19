import React from 'react';
import { GithubIcon } from './style';
import { navbarProps as Props } from '../../interfaces/navbarProps';

const GithubButton: React.FC<Props> = (props) => {
    return (
        <a href="https://github.com/EdsonMartinelli">
            <GithubIcon color={props.color}/>
        </a>
    )
}

export default GithubButton;