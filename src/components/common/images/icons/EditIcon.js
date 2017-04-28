import React, {PropTypes} from 'react';

const EditIcon = ({size = '1em', style = {}}) => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1785 1415"
        style={{...style, width: size, height: size, transform: 'scaleY(-1)'}}
      >
        <path
          d="M888 352l116 116l-152 152l-116 -116v-56h96v-96h56zM1328 1072q-16 16 -33 -1l-350 -350q-17 -17 -1 -33t33 1l350 350q17 17 1 33zM1408 478v-190q0 -119 -84.5 -203.5t-203.5 -84.5h-832q-119 0 -203.5 84.5t-84.5 203.5v832q0 119 84.5 203.5t203.5 84.5h832 q63 0 117 -25q15 -7 18 -23q3 -17 -9 -29l-49 -49q-14 -14 -32 -8q-23 6 -45 6h-832q-66 0 -113 -47t-47 -113v-832q0 -66 47 -113t113 -47h832q66 0 113 47t47 113v126q0 13 9 22l64 64q15 15 35 7t20 -29zM1312 1216l288 -288l-672 -672h-288v288zM1756 1084l-92 -92 l-288 288l92 92q28 28 68 28t68 -28l152 -152q28 -28 28 -68t-28 -68z" />
      </svg>
  );
};

EditIcon.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object
};

export default EditIcon
//"78.95%"
