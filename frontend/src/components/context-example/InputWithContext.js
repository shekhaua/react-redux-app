import React, {Component} from 'react';
import BaseInput from "../base-input/BaseInput";
import LanguageContext from '../../contexts/LanguageContext';

class InputWithContext extends Component {

  static contextType = LanguageContext;

  render() {
    const name = (this.context === 'us')? 'Name' : 'Vorname';
    const placeholderText = (this.context === 'us')? 'Enter name ...': 'Vorname eingeben';
    return (
      <div className="form-group">
        <label>{name}</label>
        <BaseInput onChange={this.onInputChange.bind(this)} cssClass="form-control" placeholder={placeholderText}/>
      </div>
    );
  }

  onInputChange() {

  }

}

export default InputWithContext;