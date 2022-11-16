import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
    background-color: #3498db;
    border-radius: 15px;
    padding: 15px 40px;
    margin: 15px 0px;
    justify-content: center;
`;

const Title = styled.Text`
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: white;
`;

const Button = props => {
    return (
        <ButtonContainer>
            <Title>{props.title}</Title>
        </ButtonContainer>
    );
};

export default Button;