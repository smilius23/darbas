import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import StartPage from './startPage/StartPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StartPage />
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state
  };
}

export default connect(mapStateToProps)(App);
