import React, { Component } from 'react';
import { InputAutoSuggest } from 'react-native-autocomplete-search';
import arr from '../moduleInfo.json';
import { connect } from 'react-redux';
import { moduleChosen } from './actions';

class AutoComplete extends Component {
  handle(data) {
    if (data === null) {
      return;
    } else {
      this.props.moduleChosen(data);
    }
  }
  render() {
    return (
      <InputAutoSuggest
        style={{ flex: 1 }}
        onDataSelectedChange={data => this.handle(data)}
        staticData={arr}
        itemFormat={{
          id: 'moduleCode',
          name: 'title',
          tags: ['moduleCode']
        }}
      />
    );
  }
}
export default connect(
  null,
  { moduleChosen }
)(AutoComplete);
