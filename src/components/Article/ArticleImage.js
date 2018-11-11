import React  from 'react';
import PropTypes from 'prop-types';

const ArticleImage = (props) => (
    <div>
        <img src={props.src}/>
    </div>
);

ArticleImage.propTypes = {
    src: PropTypes.string.isRequired
};

export default ArticleImage;