import React, {Fragment, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios  from 'axios';

import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import UsersList from './components/users/UsersList';
import User from './components/users/User';
import About from './components/pages/About';

const App () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = userState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  async componentDidMount(){
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ 
      users: res.data, 
      loading: false
    });
    setUsers(res.data.items)
  }

  searchUsers = async (text) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUsers(res.data.items);
    setLoading(false)
  }

  getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUser(res.data);
    setLoading(false)

  }

  getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data);
    setLoading(false)
  }

  clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  setAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout(() => this.setState({ alert: null }), 2500);
  } 

  render(){
    const { users, user, loading, repos } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} /> 
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    setAlert={this.setAlert}
                    showClear={users.length > 0 ? true : false} />
                  <UsersList loading={loading} users={users} />    
                </Fragment>
              )} />
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' render={props => (
                <User 
                  { ...props }
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}/>
              
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
