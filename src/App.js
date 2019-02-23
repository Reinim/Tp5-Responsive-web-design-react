import React, { Component } from 'react';
import Header from './container/Header';
import SideMenu from './container/SideMenu';
import Artist from './component/Artist';
import AlbumGrid from './container/AlbumGrid';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';


import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Row>
          <Col xs='2'>
         <SideMenu />
         </Col>
         <Col xs='10'>
         <main>
          <Artist />
          <AlbumGrid />
         </main>
         </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
