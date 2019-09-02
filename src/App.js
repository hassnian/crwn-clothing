import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SIgnInAndOutPage from "./pages/SIgnInAndOutPage/SIgnInAndOutPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser}= this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userAuth)
        
        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser({userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SIgnInAndOutPage} />
        </Switch>
      </div>
    );
  }
}

const matchDispatchToProps = dispactch => ({
  setCurrentUser: user => dispactch(setCurrentUser(user))
});

export default connect(
  null,
  matchDispatchToProps
)(App);
