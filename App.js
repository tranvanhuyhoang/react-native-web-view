import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <WebView source={{uri: 'http://ldp.to/2AOgE'}} />
  );
};

export default App;
