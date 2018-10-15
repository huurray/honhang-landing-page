import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import withStyles from './styles';

// //sections
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

import Footer from './components/Footer';
import Header from './components/Heading';
import DownloadApp from './components/DownloadApp';

const Container = styled.div``;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.downloadApp = React.createRef();
  }

  scrollToDomRef = () => {
    const myDomNode = ReactDOM.findDOMNode(this.downloadApp.current);
    myDomNode.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <Container>
        <Header scrollToDomRef={this.scrollToDomRef} />
        <Section1 />
        <Section2 />
        <Section3 />
        <DownloadApp ref={this.downloadApp} />
        <Footer />
      </Container>
    );
  }
}

export default withStyles(App);
