import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection, TinyButton } from './common';
import { connect } from 'react-redux';
import { deletePlan } from './actions';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  deletePlan() {
    this.props.deletePlan(this.props.plan.planId, this.props.token);
  }
  editPlan() {
    Actions.edit({
      plan: this.props.plan
    });
  }
  render() {
    const { planName } = this.props.plan;
    return (
      <CardSection>
        <Text style={styles.titleStyle}>{planName}</Text>
        <TinyButton onPress={this.editPlan.bind(this)}>Edit</TinyButton>
        <TinyButton onPress={this.deletePlan.bind(this)}>Delete</TinyButton>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 2
  }
};

const mapStateToProps = state => {
  const token = state.auth.user.token;
  return { token };
};

export default connect(
  mapStateToProps,
  { deletePlan }
)(ListItem);
