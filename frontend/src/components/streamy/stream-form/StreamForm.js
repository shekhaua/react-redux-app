import React, {Component, Fragment} from 'react';
import {Field, reduxForm} from "redux-form";

class StreamForm extends Component {

  render() {
    //console.log("FORM", this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.props.doSubmit)} className="mt-3">
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
    );
  }

  renderTitleForm = ({input, meta, label}) => {
    //console.log("TITLE", input.value);
    return (
      <Fragment>
        <label htmlFor="title">{label}</label>
        <input {...input} id="title" type="text" className="form-control" placeholder="Title" />
        {this.renderErrorMessage(meta)}
      </Fragment>
    );
  };

  renderDescriptionForm = ({input, meta, label}) => {
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

const wrapped = reduxForm({form: 'streamForm', validate, destroyOnUnmount: true, enableReinitialize: true })(StreamForm);

export default wrapped;