import React, {Component} from 'react';
import ArticleText from './ArticleText';
import ArticleTitle from './ArticleTitle';
import ButtonComponent from '../ButtonComponent';
import './Article.scss';
import ArticleImage from "./ArticleImage";
import PropTypes from 'prop-types';

const ArticleContent = (props) => (
            <div id={props.id} className="ArticleContent">

                <div className="article-left">
                    <ArticleTitle title={props.title}/>
                    <ArticleText text={props.text}/>
                    {props.articleType === "firstArticle" ?
                   <div className="btn-container">
                       <ButtonComponent className="start-now-btn" title="Start now"/>
                       <ButtonComponent className="request-demo-btn" title="Request demo"/>
                   </div> :
                        <div className="btn-container">
                        <ButtonComponent title="request demo" className="request-demo-btn"/>
                        </div>
                   }

                </div>
                <div className="article-right">
                    <ArticleImage src={props.src}/>
                </div>
            </div>
        );

ArticleContent.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
    articleType: PropTypes.string,
    src: PropTypes.string
};

class Article extends Component {

    static propTypes = {
        article: PropTypes.array.isRequired,
        className: PropTypes.string
    };
    static defaultProps = { article: [] };

render() {
    const { article, className} = this.props;
    const list =  article ? article.map(item => (
            <ArticleContent
                key={item.id}
                articleType={item.type}
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