import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import PostScreen from './Screens/PostsScreen';
import AddPost from './Screens/addPost';

export default function App() {

  const AuthStack = createStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <AuthStack.Navigator>
      <AuthStack.Screen name="registr" component={RegistrationScreen} />
      <AuthStack.Screen name="login" component={LoginScreen} />
      </AuthStack.Navigator>
        {/* <RegistrationScreen></RegistrationScreen> */}
        {/* <LoginScreen></LoginScreen> */}
      {/* <PostScreen /> */}
      {/* <AddPost></AddPost> */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
