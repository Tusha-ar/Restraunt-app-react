import React, { Component } from 'react';
import './Style/main.scss'
import './App.css';
import Nav from './Components/Nav';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import  Home  from './Components/Home';
import  Order  from './Components/Order';
import  Bookings  from './Components/Bookings';
import  Contact  from './Components/Conatct'
import Admin from './Components/A_Component/Admin';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
       special: {
            dish_name : null,
            dish_picture : null,
            dish_price : null
          }
    }
  }
    handleSpecial = (name, img, price) =>{
      console.log(name, img, price)
      this.setState({
        special: {
          dish_name: name,
          dish_picture: img,
          dish_price: price
        }
      },()=>console.log(this.state.special))
    }

  render(){
    return(
      <BrowserRouter>
        <div>
            <Nav/>
            <Switch>
              <Route path="/" exact component={()=><Home special = {this.state.special}/>}/>
              <Route path="/Order" component={Order}/>
              <Route path="/Bookings" component={Bookings}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/admin" component={()=><Admin handleSpecial = {this.handleSpecial}/>}/>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
