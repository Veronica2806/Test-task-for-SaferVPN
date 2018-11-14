import React, { Component } from 'react';
import PropTypes from 'prop-types';
//@COMPONENTS
import FooterItem from './FooterItem';
// @STYLES
import './Footer.scss';
class FooterList extends Component {

    static propTypes = {
        footerItems: PropTypes.array.isRequired,
        className: PropTypes.string
    };
    static defaultProps = { navListItems: [] };

    render() {
        const { footerItems, className } = this.props;
        const list =  footerItems ? footerItems.map(item => (
                <FooterItem
                    key={item.id}
                    id={item.id}
                    href={item.href}
                    src={item.src}
                />
            )
        ) : <div>Footer list is empty</div>;
        return (
            <div className={className}>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default FooterList;
