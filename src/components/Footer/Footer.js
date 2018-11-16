import React, { Component } from 'react';

// @STYLES
import './Footer.scss';

class Footer extends Component {
    render() {
        const { children, className } = this.props;
        return (
            <div className={className}>
                <div>
                    <a href="#">
                        <img src={"images/logo.png"} alt="test"/>
                        perimeter 81
                    </a>
                </div>
                <div>
                    {children}
                </div>
                <div>
                    <p>Safer Social Ltd. ©2018 | Privacy and Legal </p>
                </div>
            </div>
        );
    }
}

export default Footer;

