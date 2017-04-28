const titleStyle = {
  color: '#fff',
  fontSize: '18px',
  lineHeight: '18px',
  padding: '15px',
  margin: '0px',
  width: '100%',
  boxSizing: 'border-box'
}
export default {
  panelSimple: {
    marginBottom: '10px',
    titleBlue: {
      ...titleStyle,
      backgroundColor: '#0092aa'
    },
    titleGreen: {
      ...titleStyle,
      backgroundColor: '#3f9d01'
    },
    contentWrapper: {
      backgroundColor: '#f3f3f3',
      padding: '15px'
    }
  }
};
