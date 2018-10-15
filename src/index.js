import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';

function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }
  return false;
}

const Ie = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

ReactDOM.render(
  <>
    {detectIE() ? (
      <Ie>
        honhang.me는 인터넷 익스플로러를 지원하지 않습니다. 크롬, 파이어폭스 등
        다른 브라우저를 이용해주세요. 감사합니다.
      </Ie>
    ) : (
      <App />
    )}
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
