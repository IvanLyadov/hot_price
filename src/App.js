import React, { Component } from 'react';
import Main from './views/Main.js';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);

    this.getHotoffersLUrl = 'https://stock.ssangyong.pl/api/getHotoffers/';
    this.getHotModelsUrl = 'https://stock.ssangyong.pl/api/getHotModels/';

    this.state = {
      data: null,
      model: null,
      filterByModel: this.filterByModel,
    };
  }

  componentDidMount() {
    this.makeRequest(this.getHotoffersLUrl, 'get', null, (data)=>{
      this.setState({ data: data.data });
    } );

    this.makeRequest(this.getHotModelsUrl, 'get', null, (data)=>{
      this.setState({ model: data.data })
    } )
 }

 filterByModel = (params) => {
   this.makeRequest(this.getHotoffersLUrl, 'post', params, (data)=>{
     this.setState({ data: data.data });
   } );
 }

 makeRequest = (url, method, data=null, call_back)=>{
    axios({
      method: method,
      url:url,
      responseType:'stream',
      data: data,
    })
    .then(function(response) {
      console.log(response)
      if (call_back)
        call_back(response);
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
