import React, { Component } from 'react';
import ButtonComponent from '../ButtonComponent';

// @STYLES
import './Header.scss';

class Header extends Component {
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
                    log in
                    <ButtonComponent title="request demo" status={true}/>

                    <ButtonComponent title="start now" status={true}/>


                </div>
            </div>
        );
    }
}

export default Header;

