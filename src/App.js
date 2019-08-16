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
    const res = await axios.get('https://api.github.com/users');
    this.setState({ 
      users: res.data, 
      loading: false
    });
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          <UsersList loading={this.state.loading} users={this.state.users}/>    
        </div>
      </div>
    );
  }
}

export default App;
