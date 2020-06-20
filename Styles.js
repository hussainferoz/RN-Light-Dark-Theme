import Styled from 'styled-components/native';

export const Container = Styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.BACKGROUND_COLOR};
    align-items: center;
    justify-content: center;
`;

export const TextContainer = Styled.View`
    border: 1px solid ${(props) => props.theme.TEXT_COLOR};
    padding: 16px 40px;
    border-radius: 8px;
`;

export const Text = Styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR};
    font-size: 28px;
`;

export const ButtonContainer = Styled.TouchableOpacity`
    margin: 30px 0;
    background-color: ${(props) => props.theme.BUTTON_COLOR};
    padding: 16px 40px;
    border-radius: 8px;
`;

export const ButtonText = Styled.Text`
    color: ${(props) => props.theme.BUTTON_TEXT_COLOR};
    font-size: 18px;
`;
