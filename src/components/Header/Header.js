import React, { Component } from 'react';
import Button from '../Button';

// @STYLES
import './Header.scss';

class Header extends Component {
    render() {
        const { children, className } = this.props;
        return (
            <div className={className}>
                <div>
                    <a href={"#"}>
                        <img src={"images/logo.png"} alt={""}/>
                        perimeter 81
                    </a>
                </div>
                    <div>
                        {children}
                    </div>
                <div>
                    log in
                    <Button title="request demo" status={true}/>

                    <Button title="start now" status={true}/>


                </div>
            </div>
        );
    }
}

export default Header;

