import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import style from './style';

import Loader from '../../components/common/ajaxLoader/Loader';

class StartPage extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const pictures = this.props.pictures;
    const Picture = pictures?pictures.map((item, key) => {
      return(
        <img key={key} src={item.images.normal} />
      )
    }):Loader;
    return (
      <div style={style.startPage}>
        {Picture}
      </div>
    );
  }
}

StartPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    pictures: state.dribbble.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
