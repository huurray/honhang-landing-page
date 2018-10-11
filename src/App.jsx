import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Heading';
import withStyles from './styles';

//sections
import Section1 from '../src/components/Section1';

const Container = styled.div``;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />

        <Section1 />
      </Container>
    );
  }
}

export default withStyles(App);
