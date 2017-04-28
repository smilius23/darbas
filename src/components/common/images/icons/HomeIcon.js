import React, {PropTypes} from 'react';

const HomeIcon = ({width = '1em', height = '1em', style = {}}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1664" style={style}>
      <path transform= "rotate(180 832 832)" d="M1408 544v-480q0 -26 -19 -45t-45 -19h-384v384h-256v-384h-384q-26 0 -45 19t-19 45v480q0 1 0.5 3t0.5 3l575 474l575 -474q1 -2 1 -6zM1631 613l-62 -74q-8 -9 -21 -11h-3q-13 0 -21 7l-692 577l-692 -577q-12 -8 -24 -7q-13 2 -21 11l-62 74q-8 10 -7 23.5t11 21.5 l719 599q32 26 76 26t76 -26l244 -204v195q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-408l219 -182q10 -8 11 -21.5t-7 -23.5z" />
    </svg>
  );
};

HomeIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
};

export default HomeIcon
