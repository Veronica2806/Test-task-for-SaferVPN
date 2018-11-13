import React  from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = (props) => (

    <button value={props.status}>{props.title}</button>

);

ButtonComponent.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
};

export default ButtonComponent;