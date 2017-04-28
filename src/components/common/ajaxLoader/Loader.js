import React, {PropTypes} from 'react';
import img from './ajax-loader-transparent.gif';
import style from './style';

const Loader = () => {
  return (
    <img src={img} style={style.image}/>
  );
};

Loader.propTypes = {
};

export default Loader
