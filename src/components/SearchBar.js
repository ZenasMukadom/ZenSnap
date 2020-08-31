import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import './SearchBar.css';

export default class SearchBar extends Component {

    

    constructor(props) {
        super(props)
    
        this.state = {
             SearchText:""
        }
    }

    handleChange = (event) =>{
        let name = event.target.name;
        let value= event.target.value;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit =(event) =>{
        event.preventDefault();
        this.props.userSubmit(this.state.SearchText);
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="flexContainer">
                    <label id="Label-space" htmlFor="search"><h2>Image Search :  </h2></label>
                    <TextField autoComplete="off" 
                    className="inputStyle" id="outlined-basic" 
                    variant="outlined" 
                    name="SearchText"
                    value={this.state.SearchText}
                    onChange={this.handleChange}
                    />
                    
                </form>
            </div>
        )
    }
}
