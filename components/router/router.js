import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from '../../Screens/LoginScreen';
import RegistrationScreen from '../../Screens/RegistrationScreen';
import PostScreen from '../../Screens/PostsScreen';
import AddPost from '../../Screens/CreatePostsScreen';
import UserList from '../../Screens/CreatePostsScreen';
// import IconGrid from '../../assets/images/grid.png'
  const AuthStack = createStackNavigator();
  const MainTab = createMaterialBottomTabNavigator();

export function useRoute (isAuth) {
  if (!isAuth) {
   return  <AuthStack.Navigator>
      <AuthStack.Screen
        options={{
        headerTransparent: true,
        headerTitleStyle: {
          color: 'transparent',
          // use your preferred color code
        }
        }}
        name="login"
        component={LoginScreen} />
            <AuthStack.Screen
              options={{
            headerTransparent: true,
                headerTitleStyle: {
            color: 'transparent',
            // use your preferred color code
          }
                   }}
              name="registr"
              component={RegistrationScreen} />
      </AuthStack.Navigator> 
  }
  return   <MainTab.Navigator screenOptions={{tabBarLabel: false}}>
      <MainTab.Screen
        //   options={{tabBarIcon :()=><Icon size={ 20 } name={ 'cogs' } color={ 'red' }/>}}
          options={{
              tabBarIcon: ({ focused, size, color }) => {
            //   <IconGrid name='grid' size={size} color={color}></IconGrid>
          }}}
          name='post'
          component={PostScreen}>
          </MainTab.Screen>
      <MainTab.Screen name='addPost' component={AddPost}></MainTab.Screen>
    <MainTab.Screen name='user' component={UserList}></MainTab.Screen>
    </MainTab.Navigator>
}

