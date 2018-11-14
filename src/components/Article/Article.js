import React, {Component} from 'react';
import ArticleText from './ArticleText';
import ArticleTitle from './ArticleTitle';
import ButtonComponent from '../ButtonComponent';
import './Article.scss';
import ArticleImage from "./ArticleImage";

const ArticleContent = (props) => (

            <div id={props.id}>
                <ArticleTitle
                    title={props.title}
                />
                <ArticleText
                    text={props.text}
                />
                <ButtonComponent
                    title="start now"
                />
                <ButtonComponent
                    title="request demo"
                />
                <ArticleImage
                    src={props.src}
                />

            </div>
        );
class Article extends Component {
render() {
    const { article, className} = this.props;
    const list =  article ? article.map(item => (
            <ArticleContent
                key={item.id}
                id={item.id}
                title={item.title}
                text={item.text}
                src={item.src}
            />
        )
    ) : <div>Article is empty</div>;
    return (
        <div className={className}>

                {list}

        </div>
    );
}
}

export default Article;