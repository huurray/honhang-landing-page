import React, { Component } from 'react';
import styled from 'styled-components';
import withStyles from './styles';

//sections
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

import Footer from './components/Footer';
import Header from './components/Heading';
import DownloadApp from './components/DownloadApp';

const Container = styled.div``;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <DownloadApp />
        <Footer />
      </Container>
    );
  }
}

export default withStyles(App);
