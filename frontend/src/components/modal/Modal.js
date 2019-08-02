import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {

  renderCloseButton () {
    if(this.props.onClose) {
      return(
        <button onClick={this.props.onClose} type="button" className="close">×</button>
      );
    }
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal show" tabIndex="-1" role="dialog" onClick={_ => this.props.onClose && this.props.onClose()}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{this.props.headingText}</h4>
              {this.renderCloseButton()}
            </div>
            <div className="modal-body">
              {this.props.content}
            </div>
            <div className="modal-footer">
              {this.props.actions}
            </div>
          </div>
        </div>
      </div>,
      document.querySelector('#modal-root'));
  }
}

export default Modal;