import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './views/Main.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
   fetch('https://stock.ssangyong.pl/api/getHotoffers/')
     .then(response => {
       return response.json();
       console.log(response);
     })
     .then(data => {
       console.log(data);
       this.setState({ data })
     });
 }

  render() {
    console.log(this.state);
    return (
      <div>
        <Main/>
      </div>
    );
  }
}

export default App;
