import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './style';
import * as Actions from '../../actions/callApiActions';
import { dribbbleApiTypes } from '../../actions/actionTypes';

import Loader from '../../components/common/ajaxLoader/Loader';
import Image from '../../components/images/ImageContainer';
import ScrollToTop from '../../components/scrollToTop/ScrollToTop';

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: window.scrollY,
      apiUrl: 'https://api.dribbble.com/v1/shots',
      token: 'access_token=4b866f453919eda6771f607d0ce40f442a0c7c5e307b40bb0e6344ef288dff03',
      page: 1,
      per_page: 0
    }
  }

  handleScroll=()=>{
    this.setState({
      scroll: window.scrollY
    });
  }

  imagesPerPage(){
    const sWidth = document.body.clientWidth;
    const sHeight = document.documentElement.clientHeight
    const imageSizeX = 200;
    const imageSizeY = 154;
    const margin = sWidth * 1 / 100;
    const xImages = Math.floor(sWidth / (imageSizeX + (margin*2)));
    const yImages = Math.ceil(sHeight / (imageSizeY + (margin*2)))
    const itemsPerPage = xImages * yImages;
    this.setState({
      per_page: itemsPerPage
    });
    return itemsPerPage;
  }

  componentWillMount() {
    const apiUrl = this.state.apiUrl;
    const token = this.state.token;
    const page = this.state.page;
    const per_page = this.imagesPerPage();


    const url = apiUrl+'?'+token+'&page='+page+'&per_page='+per_page;
    this.props.actions.getData(
      url,
      dribbbleApiTypes
    );
  }

  componentDidMount() {
    addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    addEventListener('scroll')
  }

  render() {
    const pictures = this.props.pictures;
    const Picture = pictures?pictures.map((item, key) => {
      return(
        <Image key={key} src={item.images.teaser} />
      )
    }):<Loader />;
    let scrollButton='';
    if(this.state.scroll > 100){scrollButton=<ScrollToTop />}
    return (
      <div style={style.startPage}>
        {Picture}
        {scrollButton}
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
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
