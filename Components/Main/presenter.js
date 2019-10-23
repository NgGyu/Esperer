import React from 'react';
import { StyleSheet, Text, View, Image , StatusBar } from 'react-native';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../theme';

const Container = styled.View`
  flex: 17;
  backgroundColor: ${props => props.theme.mainColor};
`;
const LogoContainer = styled.View`
  flex: 2;
  backgroundColor: ${props => props.theme.mainColor};
  borderBottomColor: #d0dbdb;
    borderBottomWidth: 2;
`;
const SB = styled.View`
  flex: 1;
  backgroundColor: ${props => props.theme.mainColor};
`;

const Logo = styled.Image`
  width: 200;
  height: 60;
  resizeMode: stretch;
`;

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
        <SB></SB>
        <LogoContainer>
            <Logo
                source={require('../../res/headlogo.png')}
            />  
        </LogoContainer>
        <Container>
        
        </Container>
    </ThemeProvider>
    
  );
}



