import React, { Component } from 'react'

class SearchBar extends Component { 
    render() {
        return (
            <div>
                <label htmlFor="fruit-filter">Filter These Fruits:</label>
                <input onChange={this.props.handleUserInput} type="text" id="fruit-filter" />
            </div>
        )
    }
}

export default SearchBar