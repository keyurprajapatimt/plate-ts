/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {Routes} from './routes/Routes';
import {store} from './redux/store';

const BoilerPlate = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaView>
  );
};

export default BoilerPlate;
