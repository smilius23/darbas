import React, {PropTypes} from 'react';
import style from './style';

const ImageContainer = ({src}) => {
  return (
    <div style={style.imageSection}>
      <img src={src} style={style.image} />
    </div>
  );
};

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired
};

export default ImageContainer
