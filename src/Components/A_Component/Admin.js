import React from 'react';
import AddFav from './addFav';



class Admin extends React.Component{
    render(){
        return(
            <div className='admin'>
              <AddFav handleSpecial = {this.props.handleSpecial}/>  
            </div>
        )
    }
}


export default Admin;