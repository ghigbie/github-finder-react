import  React, {Component}  from 'react';
import PropTypes from 'prop-types'

const Navbar = () => {
        return(
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon}></i>
                    {this.props.title}
                </h1>
            </nav>
        );
}
    Navbar.defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    }

    Navbar.PropTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

export default Navbar;