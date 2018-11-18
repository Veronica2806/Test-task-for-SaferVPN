import React  from 'react';
import PropTypes from 'prop-types';

const ArticleText = (props) => (

        <p className={props.className}>{props.text}</p>
);

ArticleText.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};
ArticleText.default = {
    text: '',
    className: ''
};
export default ArticleText;