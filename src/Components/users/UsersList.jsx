import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


const UsersList = ({ users, loading}) => {
        if(loading){
            return <Spinner />
        }else {
            return(
                <div className="UserList"
                    style={userStyle}>
                    { users.map((user) => (
                        <UserItem 
                            key={user.id}
                            user={user}
                        />
                    ))}
                </div>);
        }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

UsersList.propTypes ={
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}


export default UsersList;