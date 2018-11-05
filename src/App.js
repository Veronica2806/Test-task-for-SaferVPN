import React, { Component } from 'react';

//@COMPONENTS
import NavBarList from './components/NavBar';

//@MOCKS
import Header from './components/Header';
import { NavBarItems } from './mocks/NavBarItems';

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

      </div>
    );
  }
}

export default App;
