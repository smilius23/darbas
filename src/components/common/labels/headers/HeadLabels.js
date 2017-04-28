import React, {PropTypes} from 'react';
import style from './style';

const headLabels = ({size = '1', value}) => {
    let sizeStyle = '';
    switch (size) {
        case '1': sizeStyle = style.labels.headLabels.sizeOne; break;
        case '2': sizeStyle = style.labels.headLabels.sizeTwo; break;
        case '3': sizeStyle = style.labels.headLabels.sizeThree; break;
        default: sizeStyle = {};
    }
	return(
			<div style={sizeStyle}>{value}</div>
	);
};

headLabels.propTypes = {
  size: PropTypes.string,
	value: React.PropTypes.string.isRequired
};

export default headLabels;
