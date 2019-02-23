import React, { Component } from 'react';
import Header from './container/Header';
import SideMenu from './container/SideMenu';
import Artist from './component/Artist';
import AlbumGrid from './container/AlbumGrid';
import { Container } from 'reactstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <SideMenu />
        <main>
          <Artist />
          <AlbumGrid />
        </main>
      </Container>
    );
  }
}

export default App;
