import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import style from './style';

class StartPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style.startPage}>
        Labas
      </div>
    );
  }
}

StartPage.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
