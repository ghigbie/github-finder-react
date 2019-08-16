import React, {Component} from 'react';
import UserItem from './UserItem';

class UsersList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const userStyle = {
            display: 'grid',
            gridTemplateColumns: 'reapeat(3 1fr)',
            gridGap: '1rem',
        }
        return(
            <div className="UserList"
                 style={userStyle}>
                { this.props.users.map((user) => (
                    <UserItem 
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        )
    }
}


export default UsersList;