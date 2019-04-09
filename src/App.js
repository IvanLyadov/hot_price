import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './views/Main.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      model: null,
    };
  }

  componentDidMount() {
    this.makeRequest('https://stock.ssangyong.pl/api/getHotoffers/', (data)=>{
      this.setState({ data });
    } );

    this.makeRequest('https://stock.ssangyong.pl/api/getHotModels/', (data)=>{
      this.setState({ model: data })
    } )
 }

 makeRequest = (url, call_back)=>{
   fetch(url)
     .then(response => {
       return response.json();
     })
     .then(data => {
       if (call_back)
         call_back(data);
       console.log(data);
     });
 }

  render() {
    return (
      <div>
        <Main data={this.state}/>
      </div>
    );
  }
}

export default App;
