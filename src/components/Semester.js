/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TinyButton, CardSection } from './common';
import { connect } from 'react-redux';
import { sendDeletePosition } from './actions';

class Semester extends Component {
  deleteModule(semester, index) {
    this.props.sendDeletePosition(semester[0], semester[1]);
  }

  renderItem({ item, index }) {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          alignContent: 'center',
          flexDirection: 'row',
          marginTop: 5
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ alignSelf: 'center' }}>{item.moduleCode}</Text>
        </View>
        <View style={{ flex: 2, alignSelf: 'stretch' }}>
          <Text style={{ alignSelf: 'center' }}>{item.title}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={{ fontSize: 20 }}>&#9650;</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 20 }}>&#9660;</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TinyButton>Prereqs</TinyButton>
        </View>
        <View style={{ flex: 1 }}>
          <TinyButton
            onPress={this.deleteModule.bind(this, [this.props.semester, index])}
          >
            Delete
          </TinyButton>
        </View>
      </View>
    );
  }

  render() {
    const data = this.props.data;
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
      >
        <CardSection>
          <Text>{this.props.header}</Text>
        </CardSection>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem.bind(this)}
        />
      </View>
    );
  }
}
export default connect(
  null,
  { sendDeletePosition }
)(Semester);
