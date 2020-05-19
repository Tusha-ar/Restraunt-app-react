import React from 'react';
import TodaysPick from './TodaysPick'

class Home extends React.Component{
    render(props){
        return(
            <div>
                <div className='home'>
                    <h1>The Hunger Solution</h1>
                </div>
                <TodaysPick special ={this.props.special}/>
            </div>
        )
    }
}


export default Home