import React, {PropTypes} from 'react';
import style from './style';

import SelectOneMenuOption from './SelectOneMenuOption';

const SlelctOneMenu = ({value='', selectOptions=[], handleChange, readOnly=''}) => {
  return (
    <select style={style.selected} value={value} onChange={handleChange} disabled={readOnly}>
      {selectOptions.map((item, key) => {
        return(
          <SelectOneMenuOption
            label={item.itemLabel}
            value={item.itemValue}
            key={key}
            itemKey={key}
          />
        )
      })}
    </select>
  );
};

SlelctOneMenu.propTypes = {
  value: PropTypes.string,
  selectOptions: PropTypes.array,
  handleChange: PropTypes.func
};

export default SlelctOneMenu
