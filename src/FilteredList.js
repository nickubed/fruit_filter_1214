import React, { Component } from 'react'

class FilteredList extends Component {
    render() {
        return (
            <ul>
                {this.props.filteredList.map((fruit, i) => {
                    return <li key={`key is ${i}`}>{fruit}</li>
                })}
            </ul>
        )
    }
}

export default FilteredList 