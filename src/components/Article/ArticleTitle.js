import React  from 'react';
import PropTypes from 'prop-types';

const ArticleTitle = (props) => (

        <h1>{props.title}</h1>

);

ArticleTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default ArticleTitle;