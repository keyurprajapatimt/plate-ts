import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';

const KeyboardAvoid = ({children}: any) => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default KeyboardAvoid;
