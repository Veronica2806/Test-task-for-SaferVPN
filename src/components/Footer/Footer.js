import React, { Component } from 'react';

// @STYLES
import './Footer.scss';
import PropTypes from "prop-types";

class Footer extends Component {
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
                        perimeter 81
                    </a>
                </div>
                <div>
                    {children}
                </div>
                <div className="header-right">
                    <p>Safer Social Ltd. &copy; 2018 | Privacy and Legal </p>
                </div>
            </div>
        );
    }
}

export default Footer;

