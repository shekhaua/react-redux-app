import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {Redirect, Link} from "react-router-dom";

import './Streamy.css';

import Card from "../card/Card";

import {createStream, getStreams} from "../../actions/streamy";
import {deleteStreamPath, showStreamPath} from '../../components/streamy/routes';


class Streamy extends Component {

  state = {
    goToCreateStream: false
  };

  componentDidMount(){
    this.props.getStreams();
  }

  renderTitleForm = ({input, meta, label}) => {
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

  doSubmit(formValues) {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <Fragment>
        <Card title="Streams" cssClass="stream-list">
          {this.renderCreateStreamButton()}
          {this.renderStreamsList(this.props.streams)}
        </Card>
        {this.redirectToCreateStream()}
      </Fragment>
    );
  }

  renderAdminButtons(stream) {
    if(stream.userId && stream.userId === this.props.currentUser.id) {
      return (
        <td>
          <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle"
                  onClick={this.deleteStream.bind(this, stream.id)}>
            <i className="ti-trash"></i>
          </button>
          <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                  onClick={this.editStream.bind(this, stream.id)}>
            <i className="ti-pencil-alt"></i>
          </button>
        </td>
      );
    }
  }

  renderStreamsList(streams) {
    const rows = streams.map((stream, index) => {
      return(
        <tr key={stream.id}>
          <td className="pl-4">{index + 1}</td>
          <td>
            <h5 className="font-medium mb-0"><Link to={showStreamPath(stream.id)}>{stream.title}</Link></h5>
            <span className="text-muted">{stream.description}</span>
          </td>
          <td>
            <span className="text-muted">User Name</span><br/>
            <span className="text-muted">User Surname</span>
          </td>
          <td>
            <span className="text-muted">daniel@website.com</span><br/>
            <span className="text-muted">999 - 444 - 555</span>
          </td>
          {this.renderAdminButtons(stream)}
        </tr>
      );
    });

    return (
      <div className="table-responsive">
        <table className="table no-wrap user-table mb-0">
          <thead>
          <tr>
            <th scope="col" className="border-0 text-uppercase font-medium pl-4">#</th>
            <th scope="col" className="border-0 text-uppercase font-medium">Name</th>
            <th scope="col" className="border-0 text-uppercase font-medium">User</th>
            <th scope="col" className="border-0 text-uppercase font-medium">Email</th>
            <th scope="col" className="border-0 text-uppercase font-medium">Manage</th>
          </tr>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </table>
      </div>
    );
  }

  renderCreateStreamButton() {
    if(!this.props.userSignedIn) { return null; }
    return (
      <div className="pull-right">
        {/*<button className="btn btn-circle btn-success text-white" onClick={() => this.setState({goToCreateStream: true})}>
          <i className="ti-plus"></i>
        </button>*/}
        <button className="btn btn-circle btn-success text-white" onClick={this.navigateToCreateStream.bind(this)}>
          <i className="ti-plus"></i>
        </button>
        <span className="ml-2 font-normal text-dark">Create Stream</span>
      </div>
    );
  }

  /*
  * 1st way of doing navigation: using Redirect
  * */
  redirectToCreateStream() {
    if (this.state.goToCreateStream) {
      return (
        <Redirect to="/streams/new"/>
      );
    }
    return null;
  }

  navigateToCreateStream() {
    this.props.history.push('streams/new');
  }

  deleteStream(id) {
    this.props.history.push(deleteStreamPath(id));
  }

  editStream(id) {
    this.props.history.push(`streams/edit/${id}`);
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

function mapStateToProps(state) {
  return {
    streams: Object.values(state.streams),
    currentUser: state.googleAuth.user,
    userSignedIn: state.googleAuth.userSignedIn
  }
}

  const wrapped = reduxForm({ form: 'createStream', validate })(Streamy);

export default connect(mapStateToProps, { getStreams, createStream})(wrapped);
