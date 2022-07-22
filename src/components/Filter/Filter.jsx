import React, { Component } from 'react';


class Filter extends Component {
    state = { 
        filter:'',
    } 
    
    handleInputChange = e => {
        e.preventDefault()
        console.log(e.currentTarget.value);
      
        
    }
        
        render() { 
        return (
            <label>
        Find contacts by name
        <br />
        <input type='text' onChange={this.handleInputChange}/>
    </label>
        );
    }
}
 
export default Filter;

