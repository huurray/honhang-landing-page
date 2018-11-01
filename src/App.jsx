import React from 'react';
import firebase from 'firebase';
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

    const config = {
      apiKey: 'AIzaSyDYlDo9FZdttusjJne9FiAaVZI8HO5Dx-A',
      authDomain: 'honhang-landing-page.firebaseapp.com',
      databaseURL: 'https://honhang-landing-page.firebaseio.com',
      projectId: 'honhang-landing-page',
      storageBucket: 'honhang-landing-page.appspot.com',
      messagingSenderId: '909970209891'
    };

    firebase.initializeApp(config);
  }

  countPage() {
    const pageRef = firebase
      .database()
      .ref('total')
      .child('count');

    pageRef.transaction(count => {
      if (count) {
        count++;
      } else {
        count = 1;
      }
      return count;
    });
  }

  componentDidMount() {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        this.countPage();
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
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
