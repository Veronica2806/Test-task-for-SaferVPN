import React  from 'react';
import PropTypes from 'prop-types';

const ArticleTitle = (props) => (
    <div>
        <h2>{props.title}</h2>
    </div>
);

ArticleTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default ArticleTitle;