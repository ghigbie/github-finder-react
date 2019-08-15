import React, {Component} from 'react';
import UserItem from './UserItem';

class UsersList extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [
                {
                    id: '1',
                    login: 'Mojobo',
                    avatar_url: 'https://avatar0.gihubusercontent.com/u/1?v=4',
                     html_url: 'https://github.com/mojombo'
                },
                {
                    id: '2',
                    login: 'Mojobo',
                    avatar_url: 'https://avatar0.gihubusercontent.com/u/1?v=4',
                    html_url: 'https://github.com/mojombo'
                },
                {
                    id: '3',
                    login: 'Mojobo',
                    avatar_url: 'https://avatar0.gihubusercontent.com/u/1?v=4',
                    html_url: 'https://github.com/mojombo'
                },
            ],
        }
    }

    render(){
        return(
            <div className="UserList">
                { this.state.users.map((user) => (
                    <UserItem 
                        key={user.id}
                        login={user.login}
                        avatar_url={user.avatar_url}
                        html_url={user.html_url}
                    />
                ))}
            </div>
        )
    }
}

export default UsersList;