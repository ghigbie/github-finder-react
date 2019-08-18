import React, {Component} from 'react';
import './App.css';
import axios  from 'axios';

import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import UsersList from './components/users/UsersList';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount(){
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ 
      users: res.data, 
      loading: false
    });
  }

  searchUsers = async (text) => {
    this.setState({ loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      users: res.data.items, //this is a different response
      loading: false
    })
  }

  clear = () => {
    this.setState({ users: []});
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} clear={this.clear}/>
          <UsersList loading={this.state.loading} users={this.state.users}/>    
        </div>
      </div>
    );
  }
}

export default App;
