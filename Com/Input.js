import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
    min-width: 60%;
    height: 40px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 2px;
    border-color: #3498db;
    color: #3498db;
    font-size: 20em;
    font-weight: 600;
`;

const Input = props => {
    return <StyledInput value={props.value} onChangeText={props.onChangeText} placeholder={props.title}placeholderTextColor='#3498db' />
}

export default Input;