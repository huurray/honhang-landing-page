import * as React from "react";
import styled from "styled-components";

const Circle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  background-color: ${props => props.color};
  z-index: 10;
`;

class MovingCircle extends React.Component {
  constructor(props) {
    super(props);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.xV = 1;
    this.yV = 1;
    this.color = this.getRandomColor();

    this.state = {
      x: Math.floor(Math.random() * this.width),
      y: Math.floor(Math.random() * this.height)
    };

    this.moveACircle = this.moveACircle.bind(this);
  }

  componentDidMount() {
    this.moveACircle();
  } 

  componentWillUnmount() {
    clearInterval(this.moveXY);
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  moveACircle() {
    const { v = 1 } = this.props;
    this.moveXY = setInterval(() => {
      this.setState(prevState => {
        const xVel = v * this.xV;
        const yVel = v * this.yV;
        const { x, y } = prevState;
        let moveX;
        let moveY;
        moveX = x + xVel;
        moveY = y + yVel;

        if (moveX < 0) {
          this.xV = 1;
        } else if (moveX > this.width) {
          this.xV = -1;
        }

        if (moveY < 0) {
          this.yV = 1;
        } else if (moveY > this.height) {
          this.yV = -1;
        }

        return { x: moveX, y: moveY };
      });
    }, 1000 / 60);
  }

  render(): React.Node {
    const { x, y } = this.state;
    return <Circle x={x} y={y} color={this.color} />;
  }
}

export default MovingCircle;
