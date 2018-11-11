import React, { Component } from 'react';
import NavBarList from './components/NavBar';
import Header from './components/Header';
import { NavBarItems } from './mocks/NavBarItems';
import { CardItems } from './mocks/CardItems';
import Article from './components/Article'
import CardList from "./components/Card/CardList";

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
          <Article/>
          <CardList
              className="card-list"
              cardItem={CardItems}
          />
      </div>
    );
  }
}

export default App;
