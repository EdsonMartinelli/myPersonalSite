import React from 'react';
import { LinkedinIcon } from "./styleLinkedin";
import { navbarButtonProps as Props } from '../../interfaces/navbarButtons';

const LinkedinButton: React.FC<Props> = ({color, url}) => {
    return (
        <LinkedinIcon color={color}/>
    )
}

export default LinkedinButton;