import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../theme';

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: ${props => props.theme.mainColor};

`;

const Logo = styled.Image`
  width: 345;
  height: 300;
  resizeMode: stretch;
`;

export default function Loading() {
  return (
    <ThemeProvider theme={theme}>
      <Container>   
        <Logo
          source={require('../../res/logo.png')}
        />
      </Container>
    </ThemeProvider>
    
  );
}



