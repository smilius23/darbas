import React, {PropTypes} from 'react';

const LockIcon = ({width = '1.3em', height = '1.3em', style = {}}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1664" width={width} height={height} style={style}>
      <path transform= "rotate(180 832 576)"
            d="M704 512q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5q0 -37 19 -67t51 -47l-69 -229q-5 -15 5 -28t26 -13h192q16 0 26 13t5 28l-69 229q32 17 51 47t19 67zM320 768h512v192q0 106 -75 181t-181 75t-181 -75t-75 -181v-192zM1152 672v-576q0 -40 -28 -68 t-68 -28h-960q-40 0 -68 28t-28 68v576q0 40 28 68t68 28h32v192q0 184 132 316t316 132t316 -132t132 -316v-192h32q40 0 68 -28t28 -68z" />
    </svg>
  );
};

LockIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
};

export default LockIcon
