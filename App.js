import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from "@react-navigation/native";


function cadastrar() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Seja bem vindo!</Text><Button />
      <TextInput/>
      <TextInput secureTextEntry={true}
      />
      <Button title="Cadastrar" onPress={() => {
        navigation.navigate("iniciologado")
      }}/>
      <Button title="fazer login"
      onPress={() => {
        navigation.navigate("telalogin")

      }}/>
    </View>
    
  )
}
function iniciologado() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>parabens pelo cadastro</Text>
      <Button title="Voltar"
      onPress={() => {
        navigation.navigate("cadastrar")

      }}/>
      <Button title="go perfil"
      onPress={() => {
        navigation.navigate("profile")
      }}/>
      <Button title="suporte"
      onPress={() => {
        navigation.navigate("chat")
      }}/>
    </View>
  )
}
function home() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Bem vindo</Text>
      <Button title="Cadastrar"
      onPress={() => {
        navigation.navigate("cadastrar")
      }}/>
    </View>
  )
  }
function login() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Faça o login</Text>
      <Button title="login"
      onPress={() => {
        navigation.navigate("iniciologado")
      }}/>
    </View>
  )
}
function profile() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>seu perfil</Text>
      <Button title="Voltar"
      onPress={() => {
        navigation.navigate("iniciologado")
      }}/>
    </View>
  )
  
}
function chat() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Papo</Text>
      <Button title="Voltar"
      onPress={() => {
        navigation.navigate("iniciologado")
      }}/>
    </View>
  )
  
}
export default function App() {

  const Stack = createStackNavigator()
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="home"> 
        <Stack.Screen name="cadastrar" component={cadastrar} />
        <Stack.Screen name="iniciologado" component={iniciologado} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="profile" component={profile} />
        <Stack.Screen name="chat" component={chat} />

       </Stack.Navigator>
    </NavigationContainer>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
