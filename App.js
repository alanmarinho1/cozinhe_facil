import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Login from './screens/Login/'
import Entrar from './screens/Entrar'
import Registrar from './screens/Registrar'
import TelaPrincipal from './screens/Tela Principal'
import { firebase } from '@react-native-firebase/auth';
import { 
  InputSearchField,  
  DivUserDrawer, DrawerUserNoImage, DrawerUserImage, DivUserData } from './styles/styles'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function logoutFirebase(){
  return(
    firebase.auth()
          .signOut()
          .then(() => {
            console.log('Usuario desconectado')
          })
  );
  
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrar" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Entrar" component={Entrar} />
        <Stack.Screen name="Registrar" component={Registrar} />
        <Stack.Screen name="TelaPrincipal" component={DrawerScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const CustomDrawer = ({ navigation }) => {
  return <DrawerContentScrollView {...navigation} style={{backgroundColor: '#FF9C33'}}>
    <DivUserDrawer>
      <DivUserData>
        <Text style={{paddingTop: 10, fontSize: 18}}>Olá ~ nome usuario~</Text>
        <Text style={{marginTop: 3}}>~email~</Text>
      </DivUserData>
      <DrawerUserNoImage source={require('./assets/no-photo2.png')} />
    </DivUserDrawer>
    <DrawerItem
      label="Sair"
      onPress={() => {firebase.auth()
        .signOut()
        .then(() => {
          alert('Usuario desconectado')
        })
        navigation.navigate('Entrar') 
        }}
      />
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
    {/* <Drawer.Screen name="Sair" component={Entrar} /> */}
  </Drawer.Navigator>
   );
}


