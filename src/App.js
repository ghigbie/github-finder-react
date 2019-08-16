import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/layout/Search';
import UsersList from './components/users/UsersList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Search />
        <UsersList />    
      </div>
    </div>
  );
}

export default App;
