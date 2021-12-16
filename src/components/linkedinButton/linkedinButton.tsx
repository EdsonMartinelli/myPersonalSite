import React from 'react';
import linkedinIcon from "../../assets/linkedin-icon.svg"
import "./linkedinButton.css"

const LinkedinButton: React.FC = () => {
    return (
        <>
            <img className="img-linkedin" src={linkedinIcon} />
        </>
    )
}

export default LinkedinButton;