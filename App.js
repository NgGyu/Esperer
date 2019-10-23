import React from 'react';
import Loading from './Components/Loading';
import Login from './Components/Login';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

let store = createStore(reducer);
console.log(store.getState());

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

componentDidMount() {
    setTimeout(() => {
        this.setState({
          isLoading: false,
        })
    }, 1200)
}
componentWillUnmount() {
  
}


  render(){
    const { isLoading, } = this.state;
    return (isLoading ? (
      <Loading />
    ) : (
      <Provider store={store}>
        <Login />
      </Provider>
      
    ));
  }
  
}
