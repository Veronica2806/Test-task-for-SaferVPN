import React, { Component } from 'react';
import PropTypes from 'prop-types';
//@COMPONENTS
import NavBarItem from './NavBarItem';
// @STYLES
import './NavBarList.scss';
class NavBarList extends Component {

    static propTypes = {
        navListItems: PropTypes.array.isRequired,
        className: PropTypes.string
    };
    static defaultProps = { navListItems: [] };

    render() {
        const { navListItems, className } = this.props;
        const list =  navListItems ? navListItems.map(item => (
            <NavBarItem
                key={item.id}
                id={item.id}
                title={item.title}
                href={item.href}
            />
            )
        ) : <div>Nav list is empty</div>;
        return (
            <div className={className}>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default NavBarList;
