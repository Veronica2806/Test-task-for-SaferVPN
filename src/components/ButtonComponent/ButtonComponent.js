import React  from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = (props) => (

    <button>{props.title}</button>

);

ButtonComponent.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ButtonComponent;