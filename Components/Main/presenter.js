import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../theme';

const Container = styled.SafeAreaView`
  flex: 30;
  backgroundColor: white;
  
`;
const LogoContainer = styled.View`
  flex: 3;
  backgroundColor: ${props => props.theme.subColor};
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


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, date:"9:50 am", type:'in',  message: "do you have teaching professor's email address?"},
        {id:2, date:"9:50 am", type:'out', message: "yoojong.bang@travelio.io"} ,
        {id:3, date:"9:50 am", type:'in',  message: "not coming "}, 
        {id:4, date:"9:50 am", type:'in',  message: "today?"}, 
        {id:5, date:"9:50 am", type:'out', message: "I am "}, 
        {id:6, date:"9:50 am", type:'out', message: "I'm running"}, 
        {id:7, date:"9:50 am", type:'in',  message: "lambda thing is not quite workings"}, 
        {id:8, date:"9:50 am", type:'in',  message: "i tried to make my own only test is working fine."},
        {id:9, date:"9:50 am", type:'in',  message: " Api gateway endpoint shows me error same for the example professor gaved us"},
      ],
      chat_No: 10,
      text: ""
    };
    
  }
  
  renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }
  // Client -> Chatbot
  chatOut = () =>{
    if(this.state.text=="") {
      return ;
    }
    let d = new Date();
    let hour = d.getUTCHours()+9;
    let time = ""+ (hour >= 24 ? hour-24 : hour) + ":" + d.getUTCMinutes() + " " + (hour >= 12 ? "pm" : "am");
    console.log(time);
    let inp = {
      id: this.state.chat_No,
      date: time,
      type: "out",
      message: this.state.text
    }
    this.setState({
      data: this.state.data.concat(inp),
      chat_No: this.state.chat_No+1,
      text: ""
    });
  }
  // Chatbot -> Client
  chatIn = () =>{
    let d = new Date();
    let hour = d.getUTCHours()+9;
    let time = ""+ (hour >= 24 ? hour-24 : hour) + ":" + d.getUTCMinutes() + " " + (hour >= 12 ? "pm" : "am");
    console.log(time);

    let inp = {
      id: this.state.chat_No,
      date: time,
      type: "in",
      //chatbot에서 받아오는 message
      message: ""
    }

    this.setState({
      data: this.state.data.concat(inp),
      chat_No: this.state.chat_No+1,
    });
  } 


  render() {
    return (
      <ThemeProvider theme={theme}>
          <SB />
          <LogoContainer>
              <Logo
                  source={require('../../res/headlogo.png')}
              />  
          </LogoContainer>
            
          <Container>
          
              <View style={styles.container}>
              
              <FlatList style={styles.list}
                data={this.state.data}
                keyExtractor= {(item) => {
                  return item.id.toString();
                }}
                ref = "flatList"
                onContentSizeChange={()=> this.refs.flatList.scrollToEnd(false)}

                renderItem={(message) => {
                  //console.log(item);
                  const item = message.item;
                  let inMessage = item.type === 'in';
                  let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                  
                  return (
                    <View style={[styles.item, itemStyle]}>
                      {!inMessage && this.renderDate(item.date)}
                      <View style={[styles.balloon]}>
                        <Text>{item.message}</Text>
                      </View>
                      {inMessage && this.renderDate(item.date)}
                    </View>
                  )
                }}/>


              <View style={styles.footer}>
                <View style={styles.inputContainer}>
                  <TextInput style={styles.inputs}
                      placeholder="Write a message..."
                      underlineColorAndroid='transparent'
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}/>
                </View>

                  <TouchableOpacity style={this.state.text=="" ? styles.btnNotSend:styles.btnSend} onPress={this.chatOut}>
                    <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
                  </TouchableOpacity>
              </View>
              
              
            </View>
            
          </Container>
          
      </ThemeProvider>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#d9fdec',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:'#22f191',
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  btnNotSend:{
    backgroundColor:'#bfc0bf',
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start',
    backgroundColor:"#9ff3f9",
  },
  itemOut: {
    alignSelf: 'flex-end',
    backgroundColor:"#eeeeee",
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    
    borderRadius:300,
    padding:5,
  },
});  



