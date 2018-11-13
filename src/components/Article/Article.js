import React, { Component } from 'react';
import ArticleText from './ArticleText';
import ArticleTitle from './ArticleTitle';
import ButtonComponent from '../ButtonComponent';
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
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five"
                />
                <ButtonComponent title="start now" status={true}/>
                <ButtonComponent title="request demo" status={true}/>
                <ArticleImage src="images/logo.png"/>

            </div>
        )




    }
}
export default Article;