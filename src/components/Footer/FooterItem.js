import React  from 'react';
import PropTypes from 'prop-types';

const FooterItem = (props) => (
    <li id={props.id}>
        <a href={props.href}><img src={props.src}/></a>
    </li>
);

FooterItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

export default FooterItem;

