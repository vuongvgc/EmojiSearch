import React from 'react';
import './InputSearch.css'
class InputSearch extends React.Component {
    render(){
        return(
            <div className="Input__text">
                <input type="text" value={this.props.value} onChange={this.props.inputChange}  />
            </div>
        )
    }
}
export default InputSearch;