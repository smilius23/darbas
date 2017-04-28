import React, {PropTypes} from 'react';

const PencilIcon = ({fill='black', width=50, height=50}) => {

  return (
    <div>
      <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 73.068 71.498">
        <g style={{stroke: fill, strokeWidth: '3', strokeLinejoin: 'miter'}}>
          <line x1="8.266" y1="53.964" x2="1.772" y2="70.306"/>
          <line x1="1.668" y1="70.111" x2="19.654" y2="65.138"/>
          <polygon style={{fill: fill}} points="19.807,64.877 72.256,12.979 66.442,7.225 14.553,59.624"/>
          <polygon style={{fill: 'none'}} points="13.847,58.98 65.783,6.568 59.913,0.872 8.542,53.779"/>
        </g>
        <g style={{fill: fill, stroke: 'none'}}>
          <polygon points="4.121,64.877 7.294,68.555 1.85,70.111"/>
        </g>
      </svg>
    </div>
  );
};

PencilIcon.propTypes = {
};

export default PencilIcon

// style="fill:none;stroke:#000000;stroke-miterlimit:10;"
