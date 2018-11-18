import React  from 'react';
import PropTypes from 'prop-types';

const ArticleTitle = (props) => (

        <h1 className={props.className}>{props.title}</h1>

);

ArticleTitle.propTypes = {
    title: PropTypes.string.isRequired,
    className:PropTypes.string
};
ArticleTitle.defaultTypes = {
    title: '',
    className:''
};

export default ArticleTitle;