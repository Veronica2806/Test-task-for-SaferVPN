import React  from 'react';
import PropTypes from 'prop-types';

const NavBarItem = (props) => (
    <li id={props.id}>
        <a href={props.href}>{props.title}</a>
    </li>
);

NavBarItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};
NavBarItem.defaultTypes = {
    id: '0',
    title: '',
    href: '#'
};

export default NavBarItem;

