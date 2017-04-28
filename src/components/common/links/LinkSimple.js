import React, {PropTypes} from 'react';
import style from './style';

import ArrowIcon from '../images/icons/ArrowIcon';
import EditIcon from '../images/icons/EditIcon';

const LinkSimple = ({label= 'link', href= '/#', arrow= false, iconEdit= false}) => {
  return (
    <a href={href} style={style.simple}>
      {arrow &&
        <ArrowIcon size="1em" style={style.simple.icon}/>
      }
      {iconEdit &&
        <EditIcon size="1em" style={style.simple.icon}/>
      }
      {label}
    </a>
  );
}

LinkSimple.propTypes = {
   label: PropTypes.string,
   href: PropTypes.string,
   arrow: PropTypes.bool,
   iconEdit: PropTypes.bool
};

export default LinkSimple;
