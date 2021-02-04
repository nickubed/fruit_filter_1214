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
        let filterBoi = this.props.fruits.filter(fruit => {
            return fruit.includes(newInput)
        })
        this.setState({
            userInput: newInput,
            filteredList: filterBoi
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