import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Users from './components/Users.jsx'
// import Places from './components/Places.jsx';
// import Commutes from './components/Commutes.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: ['home', 'work'],
      username: 'name'
    };
    this.handleName = this.handleName.bind(this)
  }

  handleName(name) {
    this.setState({username: name})
    console.log(`ping? you got a ${name} in there?`);
    axios.post('/users',{
        username: name
      })
      .then(res => {
        console.log('ping!?');
      })
      .catch((err) => {
        console.log(`error on post to /users: ${err}`);
      })
  }


  componentDidMount() {
    axios.get('/weather').then((data) => {
      console.log('darksky', data);
    });

    axios.get('/search').then((data) => {
      console.log('MapsAPI', data);
    });
  }


  sendAddress(address, placeType) {
    // This should make a post request to google's api to get coordinates for the submitted address.
    console.log('address:', address, 'placeType:', placeType);

    axios.post('/address-submit-form-or-something-like-that', {
      address,
      placeType,
    })
      .then((response) => {
        console.log(response, 'axios response');
      // this.setState({})
      })
      .catch((error) => {
        console.log(error, 'axios error');
      });
  }

  render() {
    return (
      <div>
        <h1>WeatherOrNot</h1>
        <h1>User...</h1>
        <Users handleName={this.handleName.bind(this)} username={this.state.username} />
        {/* <Places places={this.state.places} sendAddress={this.sendAddress} /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
