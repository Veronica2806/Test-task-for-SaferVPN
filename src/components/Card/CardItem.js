import React  from 'react';
import PropTypes from 'prop-types';
import ArticleText from '../Article/ArticleText';
import ArticleTitle from '../Article/ArticleTitle';
import ArticleImage from "../Article/ArticleImage";
const CardItem = (props) => (
    <li id={props.id}>
        <ArticleImage
            src={props.src}
        />
        <ArticleTitle
            title={props.title}
        />
        <ArticleText
            text={props.text}
        />
    </li>

);

CardItem.propTypes = {
    id: PropTypes.number.isRequired,
    src:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default CardItem;