import React, {PropTypes} from 'react';
import style from './style';

import ArrowIcon from '../common/images/icons/ArrowIcon';

const ScrollToTop = () => {
  const goToTop= ()=>{
    window.scrollTo(0, 0);
  }
  return (
    <div style={style.button} onClick={goToTop} >
      <ArrowIcon size="2em" style={style.arrowIcon} top />
    </div>
  );
};

ScrollToTop.propTypes = {
};

export default ScrollToTop
