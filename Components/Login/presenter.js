import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, TextInput, StatusBar, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../theme';
import Loading from "../Loading";
import Main from '../Main';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pw: '',
        };
      }
  

    
  render() {
    const {
        isLogin,
        pressedLogin,
      } = this.props;
      console.log(this.props.isLogin);
    return (isLogin ? <Main /> :
        
        <ThemeProvider theme={theme}>
        <Container>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <LogoContainer>
                <Logo
                    source={require('../../res/logo.png')}
                />
            </LogoContainer>
            
            <LoginContainer>
                
                    <TextInput
                        style={{height: 40, width:300, backgroundColor:'white', borderColor: 'gray', borderWidth: 1}}
                        placeholder="  ID"
                        onChangeText={(id) => this.setState({id})}
                        value={this.state.id}
                    />
                    <TextInput
                        style={{height: 40, width:300, backgroundColor:'white', borderColor: 'gray', borderWidth: 1}}
                        placeholder="  Password"
                        onChangeText={(pw) => this.setState({pw})}
                        value={this.state.pw}
                    />
                    <Button
                        title="Sign In"
                        onPress={pressedLogin}
                    />
                
            </LoginContainer>   
          
        </Container>
      </ThemeProvider>
    );
  }
}

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  backgroundColor: ${props => props.theme.mainColor};

`;


const LogoContainer = styled.View`
  flex: 2;
  alignItems: center;
  justifyContent: center;
`;

const Logo = styled.Image`
  width: 300;
  height: 270;
  resizeMode: stretch;
`;

const LoginContainer = styled.View`
  flex: 1;
  alignItems: flex-end;
  justifyContent: flex-start;
`;


export default Login;