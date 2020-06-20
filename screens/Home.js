import React from 'react';

import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Container, TextContainer, Text, ButtonContainer, ButtonText } from '../Styles';
import { switchTheme } from '../redux/ThemeActions';
import { lightTheme, darkTheme } from '../Theme';

const Home = () => {
	const theme = useSelector((state) => state.themeReducer.theme);
	const dispatch = useDispatch();

	const { mode } = theme;

	return (
		<ThemeProvider theme={theme}>
			<Container>
				<TextContainer>
					{mode === 'light' ? <Text>This is a light theme!</Text> : <Text>This is a dark theme!</Text>}
				</TextContainer>

				{mode === 'light' ? (
					<ButtonContainer onPress={() => dispatch(switchTheme(darkTheme))}>
						<ButtonText>Switch to dark theme</ButtonText>
					</ButtonContainer>
				) : (
					<ButtonContainer onPress={() => dispatch(switchTheme(lightTheme))}>
						<ButtonText>Switch to light theme</ButtonText>
					</ButtonContainer>
				)}
			</Container>
		</ThemeProvider>
	);
};

export default Home;
