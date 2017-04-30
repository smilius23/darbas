import React, {Component, PropTypes} from 'react';

import style from './style';

class Resolution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionX: 'auto',
      positionY: 'auto',
      rightPosition: 0,
      bottomPosition: 0,
      sWidth: document.documentElement.clientWidth,
      sHeight: document.documentElement.clientHeight
    };
  }

  updateDimensions = ()=>{
    let cWidth = document.documentElement.clientWidth;
    let cHeight = document.documentElement.clientHeight;
    if (cWidth < this.state.positionX){
      this.setState({
        positionX: cWidth - 136,
        rightPosition: 'auto'
      });
    }
    this.setState({
      sWidth: cWidth,
      sHeight: cHeight
    });
  }

  componentWillMount = ()=>{
    this.updateDimensions();
  }
  componentDidMount = ()=>{
    window.addEventListener('resize', this.updateDimensions);
  }

  onDragEndHandle = (event)=>{
    let xPosition = event.clientX
    if (xPosition < 0){xPosition = 0}
    let yPosition = event.clientY - event.target.clientHeight;
    if (yPosition < 0){yPosition = 0}
    this.setState({
      positionX: xPosition,
      positionY: yPosition,
      rightPosition: 'auto',
      bottomPosition: 'auto'
    })
  }

  render(){
    let styleContainer = {
      ...style.container,
      left: this.state.positionX+'px',
      top: this.state.positionY+'px',
      right: this.state.rightPosition,
      bottom: this.state.bottomPosition
    };
    return (
      <div
        style={styleContainer}
        draggable="true"
        onDragEnd={this.onDragEndHandle}
        onDragStart={this.onDragStart}
      >
        <div style={style.elements}>W: {this.state.sWidth}px</div>
        <div style={style.xChar}>x</div>
        <div style={style.elements}>H: {this.state.sHeight}px</div>
      </div>
    );
  }
}

Resolution.propTypes = {
};

export default Resolution;
