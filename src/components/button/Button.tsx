import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity, Text} from 'react-native';
import colors from '../../themes/colors';
import {ButtonProps} from './Button.model';

export const Button = (props: ButtonProps) => {
  const {onPress, isValid, buttonText} = props;
  const backgroundColor = isValid ? 'blue' : 'grey';
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      disabled={!isValid}
      onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
});
