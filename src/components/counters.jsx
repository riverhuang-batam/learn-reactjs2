import React,  {Component} from 'react';
import Counter from './counter'
class Counters extends Component{
    
    render(){
        // console.log(this.props)
        return(
            <div>
                <button onClick={this.props.onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(
                    counter => <Counter key={counter.id} value={counter.value} counter={counter} id={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement}/>
                    )}
            </div>
        )
    }
}
export default Counters;