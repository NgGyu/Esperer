import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as tomatoActions } from "../../reducer";
import Login from "./presenter";

function mapStateToProps(state) {
    const { isLogin } = state;
    return {
      isLogin,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      pressedLogin: bindActionCreators(tomatoActions.LoginBtn, dispatch),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);