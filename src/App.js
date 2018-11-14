import React, { Component } from 'react';
import NavBarList from './components/NavBar';
import Header from './components/Header';
import Article from './components/Article'
import CardList from "./components/Card/CardList";
import { NavBarItems } from './mocks/NavBarItems';
import { CardItems } from './mocks/CardItems';
import {FirstArticle} from "./mocks/FirstArticle";
import {SecondArticle} from "./mocks/SecondArticle";
import ArticleTitle from "./components/Article/ArticleTitle";
import ArticleText from "./components/Article/ArticleText";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";



class App extends Component {
  render() {
    return (
      <div className="App">
          <Header
            className="main-header"
          >
              <NavBarList
                  className="nav-bar-list"
                  navListItems={NavBarItems}
              />
          </Header>
          <Article
              className="first-article-section"
              article={FirstArticle}
          />
          <div>
              <ArticleTitle title="How Public Wi-Fi Can Harm Your Business" />
              <ArticleText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been "/>
          </div>
          <CardList
              className="card-list"
              cardItem={CardItems}
          />
          <Article
              className="second-article-section"
              article={SecondArticle}
          />
          <div>
              <ArticleTitle title="Lorem Ipsum is simply dummy text of the printing and typesett"/>
              <ButtonComponent title="partner with us"/>
          </div>
      </div>
    );
  }
}

export default App;
