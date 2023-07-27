import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TextInput} from 'react-native';
import colors from '../../themes/colors';
import {ErrorMessage} from '../errorMessage/ErrorMessage';
import {UserInputProps} from './UserInput.model';

export const UserInput = (props: UserInputProps) => {
  const {label, isSecureText = false, error, onChangeText, values} = props;
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <TextInput
        style={styles.textInput}
        secureTextEntry={isSecureText}
        onChangeText={onChangeText}
        value={values}
      />
      <ErrorMessage error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderRadius: 8,
    padding: 8,
    borderColor: colors.blue,
    borderWidth: 1,
  },
  inputContainer: {
    marginBottom: 16,
  },
  error: {
    color: colors.red,
    fontWeight: '600',
    marginTop: 8,
  },
});
