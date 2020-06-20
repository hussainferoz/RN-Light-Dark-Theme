import React from 'react';
import Styled from 'styled-components/native';

import { Text } from 'react-native';

const Home = () => {
	return (
		<Container>
			<Text>Trying Styled Components!</Text>
		</Container>
	);
};

export default Home;

const Container = Styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;
