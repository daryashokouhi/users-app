import { Component, useReducer } from 'react';
import './App.css';
import SingleUser from './SingleUser';
import axios from 'axios';


class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        users: []
      }
    }

  fetchList = () => {
    const promise = axios.get('https://randomuser.me/api/?results=25');

    promise.then((response) => {
      this.setState({users: response.data.results});
    });
  }

  componentDidMount() {
    this.fetchList();
  }

  removeItem = (id) => {
    for(let i=0; i < this.state.users.length; i++) {
      if(id === this.state.users[i].login.uuid) {
        this.state.users.splice(i, 1);
      }
    }
    this.setState({users: this.state.users});
  }

  render() {

    return (
      <div className="App">
        <h1>Users List - Final Exam</h1>
        <div>
          <ul className="usersList">
          {this.state.users.map((user) =>
            <li key ={user.login.uuid} className="singleUser">
              <SingleUser userImage={user.picture.large}
                          userTitle={user.name.title}
                          userFName={user.name.first}
                          userLName={user.name.last}
                          userGender={user.gender}
                          userCity={user.location.city}
                          userState={user.location.state}
                          userCountry={user.location.country}
                          userPhone={user.phone}
                          userEmail={user.email}
                          />
              <button className="deleteButton" onClick={() => this.removeItem(user.login.uuid)}>Delete User</button>
            </li>
          )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
