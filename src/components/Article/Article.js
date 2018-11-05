import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleText from './ArticleText';
import ArticleTitle from './ArticleTitle';
import Button from '../Button';
import './Article.scss';
import ArticleImage from "./ArticleImage";

class Article extends Component {
    render() {
        return(
            <div >
                <ArticleTitle
                title="automatic wi-fi security"
                />
                <ArticleText
                text="mymymymmymymymyymymymmymymymyymymymymyymymymyymymymyymymymymymymm"
                />
                <Button title="start now" status={true}/>
                <Button title="request demo" status={true}/>
                <ArticleImage src="images/1.jpg"/>

            </div>
        )




    }
}
export default Article;