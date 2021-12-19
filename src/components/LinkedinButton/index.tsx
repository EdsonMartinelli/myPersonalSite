import React from 'react';
import { LinkedinIcon } from "./style";
import { navbarProps as Props } from '../../interfaces/navbarProps';

const LinkedinButton: React.FC<Props> = ({color}) => {
    return (
        <a href="https://www.linkedin.com/in/edson-martinelli-420305220/">
            <LinkedinIcon color={color}/>
        </a>
    )
}

export default LinkedinButton;