import React from 'react';
import '../assets/scss/main.scss';
import headerImage from '../assets/img/logoHeader.svg';

class Header extends React.Component<{},{}> {

    public render () {
        return (
            <nav className="navbar navbar-fixed-top navbar-light">
                <img src={headerImage} className="logoHeader"/>         
            </nav>
        );
    }
}

export default Header;