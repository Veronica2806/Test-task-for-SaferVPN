import React  from 'react';
import PropTypes from 'prop-types';

const NavBarItem = (props) => (
    <div id={props.id}>
        <a href={props.href}>{props.title}</a>
    </div>
);

NavBarItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default NavBarItem;

