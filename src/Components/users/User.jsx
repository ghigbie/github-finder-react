import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class User extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
    }

    componentDidMount(){
        this.props.getUser({this.props.match.params.login});
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url
            followers,
            following,
            public_repos,
            public_gist
         } = this.props.user;
        return (
            <div class="User">
                User
            </div>
        )
    }
}

export default User
