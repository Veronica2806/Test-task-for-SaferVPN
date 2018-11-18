import React  from 'react';
import PropTypes from 'prop-types';
import './ButtonComponent.scss';
const ButtonComponent = (props) => (
    <button className={props.className}>{props.title}</button>
);

ButtonComponent.propTypes = {
    title: PropTypes.string.isRequired,
    hide: PropTypes.bool,
    className: PropTypes.string
};


export default ButtonComponent;