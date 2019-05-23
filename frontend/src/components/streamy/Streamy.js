import React, {Component, Fragment} from 'react';
import {Field, reduxForm} from 'redux-form';
import Card from "../card/Card";

import './Streamy.css';

class Streamy extends Component {
  renderTitleForm = ({input, meta, label}) => {
    console.log(input, meta, label);
    return (
      <Fragment>
        <label htmlFor="title">{label}</label>
        <input {...input} id="title" type="text" className="form-control" placeholder="Title" />
        {this.renderErrorMessage(meta)}
      </Fragment>
    );
  };

  renderDescriptionForm = ({input, meta, label}) => {
    console.log(meta);
    return (
      <Fragment>
        <label htmlFor="title">{label}</label>
        <textarea {...input} className="form-control" rows="3" placeholder="Description"/>
        {this.renderErrorMessage(meta)}
      </Fragment>
    );
  };

  renderErrorMessage({error, touched}) {
    if(error && touched) {
      return (
        <div className="invalid-feedback">{error}</div>
      );
    }
  }

  doSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    //console.log(this.props);
    return (
      <Card title="Create a stream">
        <form onSubmit={this.props.handleSubmit(this.doSubmit)} className="mt-3">
          <div className="form-group">
            <Field name="title" component={this.renderTitleForm} label="Title"/>
          </div>
          <div className="form-group">
            <Field name="description" component={this.renderDescriptionForm} label="Description"/>
          </div>
          <div className="form-group">
            <button className="btn btn-success" type="submit">Submit</button>
          </div>
        </form>
      </Card>
    );
  }
}

function validate(formValues) {
  const errors = {};

  if(!formValues.title) {
    errors.title = 'Please, add title.'
  }

  if(!formValues.description) {
    errors.description = 'Please, add description.'
  }

  return errors;
}


export default reduxForm({ form: 'createStream', validate })(Streamy);
