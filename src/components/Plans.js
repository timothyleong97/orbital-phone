import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { fetchPlans, makeNewPlan, nameChanged } from './actions';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class Plans extends Component {
  componentDidMount() {
    this.props.fetchPlans(this.props.token);
  }
  renderItem({ item }) {
    return <ListItem plan={item} />;
  }
  updatePlanName = text => {
    this.props.nameChanged(text);
    console.log(this.props.input);
  };

  addPlan() {
    const arr = [];
    arr[0] = [];
    const plan = {
      userId: null,
      planId: null,
      planName: this.props.input,
      modules: arr,
      modMap: new Map()
    };
    this.props.makeNewPlan(plan, this.props.token);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <FlatList
            data={this.props.plans}
            keyExtractor={plan => plan.planId}
            renderItem={this.renderItem}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Plan Name:"
            onChangeText={this.updatePlanName.bind(this)}
            value={this.props.input}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.addPlan.bind(this)}>Create Plan</Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  //TODO: do some processing on the array
  return {
    token: state.auth.user.token,
    plans: state.plans.arr,
    input: state.plans.planName,
  };
};
export default connect(
  mapStateToProps,
  { fetchPlans, makeNewPlan, nameChanged }
)(Plans);
