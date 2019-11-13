import React from 'react';
import Loading from './Components/Loading';
import Login from './Components/Login';
import Main from './Components/Main';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

let store = createStore(reducer);


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isChat: false
    }
  }

componentDidMount() {
    setTimeout(() => {
        this.setState({
          isLoading: false,
        })
    }, 1200)
    console.log(store.getState());
}
componentWillUnmount() {
  
}


  render(){
    const { isLoading, isChat} = this.state;
    return (isLoading ? (
      <Loading />
    ) : (
      !isChat ? 
      (
        <Provider store={store}>
          <Login />
        </Provider>
      ) :
      (
        <Provider store={store}>
          <Main />
        </Provider>
      )
      
      
    ));
  }
  
}
