import React, {PropTypes} from 'react';
import style from './style';

const PanelSimple = ({title= '', children='', type='blue'}) => {
  let typeStyle = '';
  switch (type) {
      case 'blue': typeStyle = style.panelSimple.titleBlue; break;
      case 'green': typeStyle = style.panelSimple.titleGreen; break;
      default: typeStyle = {};
  }
  return (
    <div style={style.panelSimple}>
      <h2 style={typeStyle}>{title}</h2>
      <div style={style.panelSimple.contentWrapper}>{children}</div>
    </div>
  );
}

PanelSimple.propTypes = {
   title: PropTypes.string
};

export default PanelSimple;
