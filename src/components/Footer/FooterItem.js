import React  from 'react';
import PropTypes from 'prop-types';

const FooterItem = (props) => (
    <li id={props.id}>
        <a href={props.href}><img src={props.src} alt=''/></a>
    </li>
);

FooterItem.propTypes = {
    id: PropTypes.number.isRequired,
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

export default FooterItem;

