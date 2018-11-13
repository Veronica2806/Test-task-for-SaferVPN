import React  from 'react';
import PropTypes from 'prop-types';

const ArticleImage = (props) => (
        <img src={props.src} alt="test" />
);

ArticleImage.propTypes = {
    src: PropTypes.string.isRequired
};

export default ArticleImage;