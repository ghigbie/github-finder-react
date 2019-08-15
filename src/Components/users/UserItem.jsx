import React, { Component } from 'react';

class UserItem extends Component{
    render(){
        const { avatar_url, login, html_url } = this.props;
        return(
            <div className='card text-center'>
                <img
                    src={avatar_url}
                    alt={avatar_url}
                    className='round-img'
                    style={{ width: '60px' }}/>
                <h3>{login}</h3>
                <div>
                    <a 
                        href={html_url}
                        className='btn btn-dark btn-sm my-1'>
                    </a>
                </div>
            </div>
        );
    }
}

export default UserItem;