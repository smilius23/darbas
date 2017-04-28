import React, {PropTypes} from 'react';

const ArrowIcon = ({size = '1em', style = {}}) => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-100 -230 1600 1600"
        //width="94%"
        style={{...style, height: size, width: size}}
      >
        <path
          d="M1472 576q0 -54 -37 -91l-651 -651q-39 -37 -91 -37q-51 0 -90 37l-75 75q-38 38 -38 91t38 91l293 293h-704q-52 0 -84.5 37.5t-32.5 90.5v128q0 53 32.5 90.5t84.5 37.5h704l-293 294q-38 36 -38 90t38 90l75 75q38 38 90 38q53 0 91 -38l651 -651q37 -35 37 -90z" />
      </svg>
  );
};

ArrowIcon.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object
};

export default ArrowIcon
//"78.95%"
