import React, {Component} from 'react';

class Counter extends Component{
    // state = {
    //     tags: ['tag1', 'tag2', 'tag3']
    // };
    componentDidUpdate(prevProps, prevState){
        console.log('prevProps',prevProps)
        console.log('prevState',prevState)
        
    }
    formatCount = () =>{
        return this.props.value === 0 ? "zero" : this.props.value
    }
    getBadgeClasses = () => {
        let classes = "badge  m-2 badge-";
        classes += (this.props.value === 0) ? "warning" : "primary";
        return classes;
    }
    // renderTags =() =>{
    //     if(this.state.tags.length === 0 ) return <p>There are no tags!</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }

    render(){
        // console.log('props', this.props)
        return(
            <React.Fragment>
                <h4>{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* {this.state.tags.map((item, index)=> {
                    return(
                    <li key={index}>{item}</li>)
                    })
                    
                } */}
                
                {/* {this.renderTags()} */}
            </React.Fragment>
        );
    }

    
}
export default Counter;