import React from 'react';
import './Filter.css'

const Filter = ({value, onChange}) => {
    return ( 
        <label className='Filter_label'>
        Find contacts by name
        
        <input type='text' value={value} onChange={onChange}/>
    </label>
     );
}
 
export default Filter;




// import React, { Component } from 'react';


// class Filter extends Component {
//     state = { 
//         filter:'',
//     } 
    
//     handleInputChange = e => {
//         e.preventDefault()
//         console.log(e.currentTarget.value);
      
        
//     }
        
//         render() { 
//         return (
//             <label>
//         Find contacts by name
//         <br />
//         <input type='text' value={this.props.value} onChange={this.handleInputChange}/>
//     </label>
//         );
//     }
// }
 
// export default Filter;

