
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Homepage from './page/homepage/homepage.component'; 
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';




function App() {
  return ( 
    <div >
    <Header />
    <Switch>
      <Route exact path='/' component ={Homepage} />
      <Route   path='/shop' component ={ShopPage} />
      </Switch>
    </div>
  )
}

export default App;
