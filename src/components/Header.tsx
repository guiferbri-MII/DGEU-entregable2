import React from 'react';
import '../assets/scss/main.scss';
import headerImage from '../assets/img/logoHeader.svg';

class Header extends React.Component<{},{}> {

    public render () {
        return (
            <nav className="navbar navbar-fixed-top navbar-light navbarHeader">
                <img src={headerImage} className="logoHeader" alt="AIRE"/>         
            </nav>
        );
    }
}

export default Header;