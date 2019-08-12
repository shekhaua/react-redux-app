import React, {Component, Fragment} from 'react';

import './ContextExample.css';

import ContextForm from "./ContextForm";
import LanguageContext from '../../contexts/LanguageContext';
import ButtonTypeContext from "../../contexts/ButtonTypeContext";

class ContextExample extends Component {

  state = {
    language: 'us'
  };

  render() {
    return (
      <Fragment>
        <div className='flags'>
          <span className="flag-icon flag-icon-us" onClick={this.flagClicked.bind(this, 'us')}></span>
          <span className="flag-icon flag-icon-de" onClick={this.flagClicked.bind(this, 'de')}></span>
        </div>
        <ButtonTypeContext.Provider value={'default'}>
          <LanguageContext.Provider value={this.state.language}>
            <ContextForm/>
          </LanguageContext.Provider>
        </ButtonTypeContext.Provider>
      </Fragment>
    );
  }

  flagClicked(flag) {
    this.setState({language: flag});
  }
}

export default ContextExample;