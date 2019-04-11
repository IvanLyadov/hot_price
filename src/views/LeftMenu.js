import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export default class LeftMenu extends React.Component {

  CheckboxHandler = (event) => {
    // let model_name = event.currentTarget.getAttribute('model-name');
    let models_values = document.querySelectorAll('.models-items input');
    let params = [];
    models_values.forEach(obj => {
      if (obj.checked)
        params.push(obj.getAttribute('model-name'));
    });
    let post_params = `${params.toString()}`
    this.props.filterByModel(post_params, 'model_params');
  }

  render() {
    let {model} = this.props;
    return (
      <Form>
        <FormGroup>
          <Label className="model-label">Wybierz model</Label>
          {
            model && model.map((obj, index)=>{
              return (
                <div key={index} className="model-wrapper" >
                  <CustomInput type="checkbox" id={`model-${index}`} className="models-items" model-name={obj.model} label={obj.model} onChange={e => {this.CheckboxHandler(e)}} />
                </div>
              );
            })
          }
        </FormGroup>
      </Form>
    );
  }
}
