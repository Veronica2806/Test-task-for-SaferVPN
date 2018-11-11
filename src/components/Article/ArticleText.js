import React  from 'react';
import PropTypes from 'prop-types';

const ArticleText = (props) => (

        <p>{props.text}</p>
);

ArticleText.propTypes = {
    text: PropTypes.string.isRequired
};

export default ArticleText;