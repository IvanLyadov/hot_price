import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export default class LeftMenu extends React.Component {
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
                  <CustomInput type="checkbox" id={`model-${index}`} label={obj.model} />
                </div>
              );
            })
          }
        </FormGroup>
      </Form>
    );
  }
}
