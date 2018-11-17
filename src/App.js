import React, { Component } from 'react';
import NavBarList from './components/NavBar';
import Header from './components/Header';
import Article from './components/Article'
import CardList from "./components/Card/CardList";
import { NavBarItems } from './mocks/NavBarItems';
import { CardItems } from './mocks/CardItems';
import {FirstArticle} from "./mocks/FirstArticle";
import {SecondArticle} from "./mocks/SecondArticle";
import {FooterItems} from "./mocks/FooterItems";
import {TitleWithList} from "./mocks/TitleWithList";
import ArticleTitle from "./components/Article/ArticleTitle";
import ArticleText from "./components/Article/ArticleText";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import Footer from "./components/Footer/Footer";
import FooterList from "./components/Footer/FooterList";
import ColumnList from "./components/Columns/ColumnList";

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
          <div className="content">
              <Article
                  className="first-article-section"
                  article={FirstArticle}
              />
              <div className="text-section">
                  <ArticleTitle title="How Public Wi-Fi Can Harm Your Business" className="section-title" />
                  <ArticleText text="Wi-Fi hotspots can be a dangerous place for business employees, resulting in the theft of private business data and breaches of compliance."
                                className="section-text"
                  />

                  <img src="./images/line2.png" alt="line"/>
              </div>
              <CardList
                  className="card-list"
                  cardItem={CardItems}
              />
              <Article
                  className="second-article-section"
                  article={SecondArticle}
              />
              <div className="text-section">
                  <ArticleTitle  className="section-title text-white" title="Lorem Ipsum is simply dummy text of the printing and typesett"/>
                  <ButtonComponent title="Partner with us" className="request-demo-btn text-blue"/>
              </div>
          </div>
          <ColumnList columnItems={TitleWithList} className="columns"/>
         <Footer
            className="main-header main-footer"
         >
            <FooterList
                className="nav-bar-list"
                footerItems={FooterItems}
            />
         </Footer>
      </div>
    );
  }
}

export default App;
