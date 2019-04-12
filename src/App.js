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
      model_params: '',
      hot_price: '',
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

 filterByModel = (params, type) => {
   let model_params = {};
   switch (type) {
     case 'model_params':
         model_params['sort[hot_price]'] = this.state.hot_price;
         model_params.model = params;
       break;

       case 'hot_price':
           model_params['sort[hot_price]'] = params;
             model_params.model = this.state.model_params;

        break;
     default:
     }
   let post_params = this.objToQueryString(model_params)
   this.makeRequest(this.getHotoffersLUrl, 'post', post_params, (data)=>{
       this.setState({
         data: data.data,
         [type]: params
       });
   } );
 }

 objToQueryString = (params) => {
   return Object.keys(params).map(key => key + '=' + params[key]).join('&');
 }

 makeRequest = (url, method, data=null, call_back)=>{
    axios({
      method: method,
      url:url,
      data: data,
    })
    .then(function(response) {
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
