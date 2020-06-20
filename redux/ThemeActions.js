export const SWITCH_THEME = 'SWITCH_THEME';

export const switchTheme = (theme) => (dispatch) => {
	dispatch({
		type: SWITCH_THEME,
		theme
	});
};
