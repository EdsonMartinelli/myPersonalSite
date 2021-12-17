import React from 'react';
import NameButton from '../nameButton/nameButton';
import LinkedinButton from '../linkedinButton/linkedinButton';
import GithubButton from '../githubButton/githubButton';
import "./Navbar.css"

const Navbar: React.FC = () => {
    return (
        <nav>
            <NameButton />
            <GithubButton color="#fff" url="google.com"/>
            <LinkedinButton color="#fff" url="google.com"/>
        </nav>
    )
}

export default Navbar;