import React from 'react';

import { Container, TextContainer, Text, ButtonContainer, ButtonText } from '../Styles';

const Home = () => {
	return (
		<Container>
			<TextContainer>
				<Text>This is a light theme!</Text>
			</TextContainer>

			<ButtonContainer>
				<ButtonText>Switch to dark theme</ButtonText>
			</ButtonContainer>
		</Container>
	);
};

export default Home;
