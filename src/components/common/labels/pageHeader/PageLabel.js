import React, {PropTypes} from 'react';
import style from './style';

const pageLabel = ({value='Page label'}) => {
  return (
    <div>
      <h1 style={style.pageLabel} >{value}</h1>
    </div>
  );
};

pageLabel.propTypes = {
  value: PropTypes.string
};

export default pageLabel
