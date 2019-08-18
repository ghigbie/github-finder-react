import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }

    handleOnChange = (e) => {
        this.setState(() => ({text: e.target.value}));
    }

    render() {
        return (
            <div className='Search'>
                <form className="form">
                    <input type="text"
                           name="text"
                           value={this.state.text}
                           onChange={this.handleOnChange}
                           placeholder="Search users..."/>
                    <input type="submit" 
                           value="Search"
                           className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
