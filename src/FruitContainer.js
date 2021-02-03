import React, { Component } from 'react'
import FilteredList from './FilteredList'
import SearchBar from './SearchBar'

class FruitContainer extends Component {
    state = {
        filteredList: this.props.fruits,
        userInput: ''
    }

    handleUserInput = (event) => {
        let newInput = event.target.value
        this.setState({
            userInput: newInput
        })
    }

    render() {
        return (
            <div>
                <h1>Fruit is Good.</h1>
                <SearchBar handleUserInput={this.handleUserInput} userInput={this.state.userInput}/>
                <FilteredList filteredList={this.state.filteredList} />
            </div>
        )
    }
}

export default FruitContainer