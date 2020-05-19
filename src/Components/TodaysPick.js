import React from 'react';


class TodaysPick extends React.Component{
    render(){
        return(
            <div className='todayspick'>
                <h1>Today's Special</h1>
                
                    {this.props.special.dish_name ?
                    <div className='special'>
                        <img src={this.props.special.dish_picture} alt='img'/>
                        <h3>{this.props.special.dish_name}</h3>
                        <h4>{this.props.special.dish_price}</h4>
                        <button>Add to Cart</button>
                    </div>
                    : <div className='special_na'>Nothing special today</div>}
                </div>
        )
    }
}

export default TodaysPick