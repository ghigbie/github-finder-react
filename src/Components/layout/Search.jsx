import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div className='Search'>
                <form className="form">
                    <input 
                        type="text"
                        name="text"
                        placeholder="Search users..."
                    />
                </form>
            </div>
        )
    }
}

export default Search
