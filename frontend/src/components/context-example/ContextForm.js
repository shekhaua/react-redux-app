import React, {Component} from 'react';
import Widget from "../base-widget/BaseWidget";
import InputWithContext from "./InputWithContext";
import ButtonWithContext from "./ButtonWithContext";
import LanguageContext from '../../contexts/LanguageContext';

class ContextForm extends Component {

  static contextType = LanguageContext;

  render () {
    const subHeadingText = (this.context === 'us')? 'Example of react connect' : 'Ein Beispiel von react connect';
    return (
      <Widget heading="Connect" subHeading={subHeadingText}>
        <form className="mt-4">
          <InputWithContext/>
          <ButtonWithContext/>
        </form>
      </Widget>
    );
  }
}

export default ContextForm;