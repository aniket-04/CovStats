import 'react-native-gesture-handler';
import {View, LogBox} from 'react-native';
import React from 'react';
import Routes from './src/navigations/Routes';
import Pagination from './src/components/Pagination';
// import LoadingScreen from './src/screens/loadingScreen/LoadingScreen';
// import OnBoardingScreen from './src/screens/onBoardingScreen/OnBoardingScreen';
// import CustomHeader from './src/components/CustomHeader';

const App = () => {
  // LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Routes />
    </View>

    // <Pagination />

    // <LoadingScreen />
    // <OnBoardingScreen />
    // <CustomHeader />
  );
};

export default App;
