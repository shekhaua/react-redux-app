import React, {Component} from 'react';
import BaseButton from "../base-button/BaseButton";

import LanguageContext from '../../contexts/LanguageContext';
import ButtonTypeContext from '../../contexts/ButtonTypeContext';

class ButtonWithContext extends Component {
  render() {
    return (
      <ButtonTypeContext.Consumer>
        {(type) => {
          return (
            <LanguageContext.Consumer>
              {(language) => this.renderButton(type, language)}
            </LanguageContext.Consumer>
          );
        }}
      </ButtonTypeContext.Consumer>
    );
  }

  renderButton(type, language) {
    const label = (language === 'us') ? 'Submit' : 'Senden';
    return(
      <BaseButton label={label} type={type || 'primary'} />
    );
  }
}

export default ButtonWithContext;