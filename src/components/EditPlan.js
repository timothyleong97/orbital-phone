import React, { Component } from 'react';
import { Card, CardSection } from './common';
import Autocomplete from './Autocomplete';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Table from './Table';
import { getPlan, updatePlan } from './actions';

class EditPlan extends Component {
  componentDidMount() {
    this.props.getPlan(this.props.plan.planId, this.props.token);
  }
  componentDidUpdate() {
    if (this.props.deleteAt != null) {
      const { semester, index } = this.props.deleteAt;
      console.log(this.props.deleteAt);
      const deleted = this.props.newPlan.modules[semester].splice(index, 1)[0];
      console.log("Deleted", deleted);
      delete this.props.newPlan.modMap[deleted.moduleCode];
      this.checkIfShouldDeleteLastSem(semester);
      this.props.updatePlan(this.props.newPlan, this.props.token);
    }
  }

  checkIfShouldDeleteLastSem(semester) {
    if (
      semester + 1 === this.props.newPlan.modules.length &&
      this.props.newPlan.modules[semester].length === 0
    ) {
      this.props.newPlan.modules.pop();
    }
  }

  render() {
    console.log('Modules in editplan:', this.props.newPlan);
    return (
      <View>
        <Card>
          <Autocomplete />
        </Card>
        <CardSection>
          <Table data={this.props.newPlan.modules} />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    module: state.edits.module,
    token: state.auth.user.token,
    newPlan: state.edits.plan,
    deleteAt: state.edits.deleteAt
  };
};

export default connect(
  mapStateToProps,
  { getPlan, updatePlan }
)(EditPlan);
