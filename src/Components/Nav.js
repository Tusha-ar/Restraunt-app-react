import React from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <span className='logo'>

                </span>
                <ul>
                    <NavLink to="/" exact className='link' activeClassName='active'>
                    <li>Home</li>
                    </NavLink>
                    <NavLink to="/order" className='link' activeClassName='active'>
                    <li>Order</li>
                    </NavLink>
                    <NavLink to="bookings" className='link' activeClassName='active'>
                    <li>Bookings</li>
                    </NavLink>
                    <NavLink to="contact" className='link' activeClassName='active'>
                    <li>Contact</li>
                    </NavLink>
                </ul>
            </nav>
        )
    }
}


export default Nav