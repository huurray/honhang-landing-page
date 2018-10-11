import React, { Component } from 'react';
import styled from 'styled-components';
import withStyles from './styles';

//sections
import Header from './components/Heading';
import Section1 from '../src/components/Section1';
import DownloadApp from './components/DownloadApp';

const Container = styled.div``;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />

        <Section1 />
        <DownloadApp />
      </Container>
    );
  }
}

export default withStyles(App);
