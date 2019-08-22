import React, from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers }) => {
    state = {
        text: ''
    }

    const onChange = e => this.setState({ [e.target.name]: e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        if(this.state.text === ''){
            setAlert('Please provide text for searching', 'light')
        }else{
            searchUsers(this.state.text);
            this.setState({text: ''});
        }
    }

        return (
            <div className='Search'>
                <form className="form"
                      onSubmit={this.onSubmit}>
                    <input type="text"
                           name="text"
                           value={this.state.text}
                           onChange={this.onChange}
                           placeholder="Search users..."/>
                    <input type="submit" 
                           value="Search"
                           className="btn btn-dark btn-block"/>
                </form>
                { showClear &&
                    <button className="btn btn-light btn-block"
                             onClick={clearUsers}>Clear</button>
                }
            </div>
        );

}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search
