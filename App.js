import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Login from './screens/Login/'
import Entrar from './screens/Entrar'
import Registrar from './screens/Registrar'
import TelaPrincipal from './screens/Tela Principal'
import { 
  InputSearchField,  
  DivUserDrawer, DrawerUserNoImage, DrawerUserImage, DivUserData } from './styles/styles'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Entrar" component={Entrar} />
        <Stack.Screen name="Registrar" component={Registrar} />
        <Stack.Screen name="TelaPrincipal" component={DrawerScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const CustomDrawer = (props) => {
  return <DrawerContentScrollView {...props} style={{backgroundColor: '#FF9C33'}}>
    <DivUserDrawer>
      <DivUserData>
        <Text style={{paddingTop: 10, fontSize: 18}}>Olá ~ nome usuario~</Text>
        <Text style={{marginTop: 3}}>~email~</Text>
      </DivUserData>
      
      <DrawerUserNoImage source={require('./assets/no-photo2.png')} />
      
    </DivUserDrawer>
    <DrawerItemList {...props}/>
  </DrawerContentScrollView>
}

 function DrawerScreens() {
   return(   
  <Drawer.Navigator initialRouteName="Receitas" 
    screenOptions={{
      headerStyle:{
        backgroundColor:'transparent',
        borderColor: 'red',
      },
      headerTitle:'',
      headerShown: false,
    }} drawerContent={(props) => <CustomDrawer {...props}/>} >
    <Drawer.Screen name="Receitas" component={TelaPrincipal} />
  </Drawer.Navigator>
   );
}

// screenOptions={{headerTintColor: "#00663D", headerStyle: {
//   backgroundColor: "#FF9C33",
//   borderRadius: 1,
// }, header}}

// function SearchField(){
//   return(
//     <InputSearchField>
//       placeholder='Pesquisar receitas'
//       style={{height:35}}
//       type="text"
//       onChangeText={(text) => true}
//       value={true}
//     </InputSearchField>
//   );
// }