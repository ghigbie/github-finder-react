import React from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
        return(
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={props.icon}></i>
                    {props.title}
                </h1>
                <ul>
                    <li>
                        <NavLink to='/'></NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'></NavLink>
                    </li>
                </ul>
            </nav>
        );
};
    Navbar.defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

export default Navbar;