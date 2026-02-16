// make blanket react component
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export const Error = ({ error }: { error: string }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'pink', textAlign: 'center' }}>{error}</Text>
    </View>
  );
};
