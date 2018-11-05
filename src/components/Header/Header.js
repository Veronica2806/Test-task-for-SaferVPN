import React, { Component } from 'react';

// @STYLES
import './Header.scss';

class Header extends Component {
    render() {
        const { children, className } = this.props;
        return (
            <div className={className}>
                <div>

                </div>
                    <div>
                        {children}
                    </div>
                <div>
                </div>
            </div>
        );
    }
}

export default Header;

