
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Homepage from './page/homepage/homepage.component'; 
import ShopPage from './page/shop/shop.component';





function App() {
  return ( 
    <div ><Switch>
      <Route exact path='/' component ={Homepage} />
      <Route   path='/shop' component ={ShopPage} />
      </Switch>
    </div>
  )
}

export default App;
