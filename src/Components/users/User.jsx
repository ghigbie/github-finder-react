import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class User extends Component {

    static propTypes = {
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
