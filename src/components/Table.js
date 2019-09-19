/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Card, CardSection } from './common';
import Semester from './Semester';

//pass the modarray in via the props
export default class Table extends Component {
  render() {
    const data = this.props.data;
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
      >
        <Card>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderSemester}
          />
        </Card>
      </View>
    );
  }

  renderSemester({ item, index }) {
    let year = Math.floor(index / 2);
    //because of zero-indexing
    const sem = index % 2 === 0 ? 1 : 2;
    year = year + 2019;
    const str = `AY ${year}/${year + 1} Semester ${sem}`;

    return (
      <CardSection>
        <Semester data={item} header={str} semester={index} />
      </CardSection>
    );
  }
}
