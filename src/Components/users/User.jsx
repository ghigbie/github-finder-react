import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from  './../layout/Spinner';

export class User extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
    }

    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
    }

    render() {
        const { //all from the user object
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gist
         } = this.props.user;

         const { loading } = this.props;

        if (loading) return (<Spinner />);

        return (
             <Fragment>
                <Link 
                    to='/'
                    classNAme='btn btn-light'>
                    Back to Search
                </Link>
            </Fragment>
        );
    }
}

export default User
