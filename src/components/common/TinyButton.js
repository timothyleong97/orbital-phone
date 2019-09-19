import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const TinyButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 13,
    fontWeight: '600',
    padding: 8
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 2,
    marginRight: 2,
    minHeight: 30
  }
};
export { TinyButton };
