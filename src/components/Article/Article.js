import React, { Component } from 'react';
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
                text="test"
                />
                <Button title="start now" status={true}/>
                <Button title="request demo" status={true}/>
                <ArticleImage src="images/logo.png"/>

            </div>
        )




    }
}
export default Article;