import React, { Component } from 'react';
import ButtonComponent from '../ButtonComponent';

// @STYLES
import './Header.scss';
import PropTypes from "prop-types";

class Header extends Component {

    static propTypes = {
        children: PropTypes.array.isRequired,
        className: PropTypes.string
    };
    static defaultProps = { children: [] };
    render() {
        const { children, className } = this.props;
        return (
            <div className={className}>
                <div className="header-left">
                    <a href="http://localhost:3000/">
                        <img src={"images/logo.png"} alt="test"/>
                        <span>perimeter 81</span>
                    </a>
                </div>
                    <div className="nav-bar">
                        {children}
                    </div>
                <div className="header-right">
                    <a href="http://localhost:3000/">log in</a>
                    <ButtonComponent title="request demo" className="request-demo-btn"/>
                    <ButtonComponent title="start now" className="start-now-btn"/>
                </div>
            </div>
        );
    }
}

export default Header;

