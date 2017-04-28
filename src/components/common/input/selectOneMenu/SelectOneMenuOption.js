import React, {PropTypes} from 'react';
import style from './style';

const SelectOneMenuOption = ({value, label, itemKey}) => {
  return (
    <option
      key={itemKey}
      style={style.selected.option}
      value={value}
    >
      {label}
    </option>
  );
};

SelectOneMenuOption.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string
};

export default SelectOneMenuOption
