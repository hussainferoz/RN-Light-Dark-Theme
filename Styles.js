import Styled from 'styled-components/native';

export const Container = Styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const TextContainer = Styled.View`
    border: 1px solid #121212;
    padding: 16px 40px;
    border-radius: 8px;
`;

export const Text = Styled.Text`
    color: #121212;
    font-size: 28px;
`;

export const ButtonContainer = Styled.TouchableOpacity`
    margin: 30px 0;
    background-color: #23a8d9;
    padding: 16px 40px;
    border-radius: 8px;
`;

export const ButtonText = Styled.Text`
    font-size: 18px;
    color: #121212;
`;
