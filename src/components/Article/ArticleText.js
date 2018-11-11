import React  from 'react';
import PropTypes from 'prop-types';

const ArticleText = (props) => (
    <div>
        <p>{props.text}</p>
    </div>
);

ArticleText.propTypes = {
    text: PropTypes.string.isRequired
};

export default ArticleText;