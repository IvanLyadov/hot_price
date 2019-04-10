import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export default class LeftMenu extends React.Component {

  CheckboxHandler = (event) => {
    let model_name = event.currentTarget.getAttribute('model-name');
    // let params = {
    //   'sort[hot_price]': 'asc',
    //   moodel: model_name,
    // }
    let params = `sort[hot_price]=desc&moodel=${model_name}`
    this.props.filterByModel(params);
  }

  render() {
    let {model} = this.props;
    return (
      <Form>
        <FormGroup>
          <Label for="exampleCheckbox">Wybierz model</Label>
          {
            model && model.map((obj, index)=>{
              return (
                <div key={index} >
                  <CustomInput type="checkbox" id={`model-${index}`} model-name={obj.model} label={obj.model} onClick={e => {this.CheckboxHandler(e)}} />
                </div>
              );
            })
          }
        </FormGroup>
      </Form>
    );
  }
}
