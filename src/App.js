import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import { Redirect } from 'react-router';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions.js';
class App extends React.Component {
 

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      
      }
      
    
      setCurrentUser(userAuth);
      // {this.setState({currentUser:userAuth});}
  });
  }

  

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => 
          this.props.currentUser ? 
          (<Redirect to='/'/>)

            :
            
           (<SignInAndSignUpPage/> )   } />
        </Switch>
      </div>
    );
  }
}
const myStateProps = ({user}) => ({
  currentUser:user.currentUser
});

const mapDispatchToProps = dispatch =>({
    setCurrentUser:user => dispatch(setCurrentUser(user))

});
export default connect(myStateProps,mapDispatchToProps ) (App);
