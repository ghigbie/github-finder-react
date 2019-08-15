import React, {Component} from './node_modules/react';
import UserItem from './UserItem';

class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            users = [
                {
                    id: 'id',
                    login: 'Mojobo',
                    avatar_url: 'https://avatar0.gihubusercontent.com/u/1?v=4',
                     html_url: 'https://github.com/mojombo'
                },
                {
                    id: 'id',
                    login: 'Mojobo',
                    avatar_url: 'https://avatar0.gihubusercontent.com/u/1?v=4',
                    html_url: 'https://github.com/mojombo'
                },
                {
                    id: 'id',
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

            </div>
        )
    }
}

export default UserList;