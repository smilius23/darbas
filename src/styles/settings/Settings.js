const color = {
	blue: {
		light: 'rgb(207, 239, 245)',
		midle: 'rgb(0, 146, 170)',
		dark: 'rgb(0, 95, 113)'
	},
	purple: {
		light: 'rgb(223, 211, 224)',
		midle: 'rgb(160, 126, 163)'
	},
	green: {
		light: 'rgb(230, 244, 220)',
		midle: 'rgb(63, 157, 1)'
	},
	grey: {
		light: 'rgb(242, 242, 242)',
		midle: 'rgb(224, 224, 224)',
		dark: 'rgb(79, 79, 79)'
	},
	white: 'rgb(255, 255, 255)',
	black: 'rgb(0, 0, 0)'
}

export default{
	colors: {
		ofText: {
			default: color.black,
			inMenu: color.white
		}
	},
	font: {
		containderFontFamily: 'Arial Narrow, Trebuchet MS, Verdana, Arial, Helvetica, sans-serif'
	},
	shadows: {
		boxShadow: '-2px 2px 9px 0px rgba(0,0,0,0.5)'
	}
}
