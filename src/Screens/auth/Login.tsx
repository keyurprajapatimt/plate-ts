import {Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, ErrorMessage, Loader, UserInput} from '../../components';
import styles from './login.styles';
import {loginValidationSchema} from './validationSchema';
import * as sagaActions from '../../constants/actionNames';
import {getAuthLoader, getAuthError} from '../../redux/selectors/authSelectors';

const Login = () => {
  const dispatch = useDispatch();
  //selectors to get data from redux state
  const isLoading = useSelector(getAuthLoader);
  const authApiError = useSelector(getAuthError);

  //this will trigger the saga action with api call
  const validateUser = (values: {email: string; password: string}) => {
    dispatch({
      type: sagaActions.AUTH_USER_SAGA,
      payload: values,
    });
  };

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{email: 'eve.holt@reqres.in', password: 'cityslicka'}}
      onSubmit={validateUser}>
      {({handleChange, handleSubmit, values, errors, isValid}) => (
        <View style={styles.loginContainer}>
          <UserInput
            label={'User Name'}
            onChangeText={handleChange('email')}
            values={values.email}
            error={errors.email}
          />
          <UserInput
            label={'Password'}
            isSecureText={true}
            onChangeText={handleChange('password')}
            values={values.password}
            error={errors.password}
          />
          <Button
            onPress={handleSubmit}
            isValid={isValid}
            buttonText={'Login'}
          />
          <Loader isLoading={isLoading} />
          <ErrorMessage error={authApiError} />
        </View>
      )}
    </Formik>
  );
};

export default Login;
