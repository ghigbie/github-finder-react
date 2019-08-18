import React, { Component } from 'react'

export class User extends Component {
    PropTypes = {
        user: PropTypes.object.isRequired,
    }
    render() {
        return (
            <div class="User">
                User
            </div>
        )
    }
}

export default User
