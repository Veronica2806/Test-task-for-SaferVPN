import React  from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (

    <button value={props.status}>{props.title}</button>

);

Button.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
};

export default Button;