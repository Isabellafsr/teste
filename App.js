import { View, Text, StyleSheet, TextInput, Switch, Pressable, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from "@react-navigation/native";


function cadastrar() {
  const navigation = useNavigation()
  return (
    
    <View style={style.container}>
      
      <Text>Seja bem vindo!</Text>
      <Text>Seu nome de user: </Text>
      <TextInput/>
      <Text>Seu melhor email: </Text>
      <TextInput/>
      <Text>Senha de user: </Text>
      <TextInput secureTextEntry={true}/>
     
      <Pressable onPress={() => {
        navigation.navigate("iniciologado")
      }}>
        <Text>Cadastrar</Text>
      </Pressable>
      <Pressable title="fazer login"
      onPress={() => {
        navigation.navigate("login")
      }}>
        <Text> Fazer login</Text>
      </Pressable>
    </View>
    
  )
}
function iniciologado() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>parabens pelo cadastro</Text>
      <Pressable title="Voltar"
      onPress={() => {
        navigation.navigate("cadastrar")

      }}>
        <Text>Voltar para cadastro</Text>
        </Pressable>
      <Pressable title="go perfil"
      onPress={() => {
        navigation.navigate("profile")
      }}>
        <Text>ir para perfil</Text>
        </Pressable>
      <Pressable title="suporte"
      onPress={() => {
        navigation.navigate("chat")
      }}>
        <Text>Ir para suporte</Text>
        </Pressable>
    </View>
  )
}
function home() {

  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Image source={{
        uri: "https://makeumuarama.com.br/image/cache/catalog/Produtos/USEGLOW/PEDRA%202-800x660.jpg"
      }}
      style={style.imagem}
      />
      <br></br>
      <br></br>
      <Text>Bem vindo!!!</Text>
      <br></br>
      <Pressable title="Cadastrar"
      onPress={() => {
        navigation.navigate("cadastrar")
      }}>
        <Text> Cadastrar</Text>
        </Pressable>
    </View>
  )
  }
function login() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Faça o login</Text>
      <Text>Nome de user: </Text>
      <TextInput/>
      <Text>Senha de user: </Text>
      <TextInput secureTextEntry={true}/>

      <Pressable
      onPress={() => {
        navigation.navigate("iniciologado")
      }}>
        <Text>Ir para tela inicial</Text>
      </Pressable>
    </View>
  )
}
function profile() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Perfil pessoal</Text>
      <Text>Notificações</Text>
      <Switch></Switch>
      <Text>Receber novidades da loja</Text>
      <Switch></Switch>
      <Text>Receber mensagens</Text>
      <Switch></Switch>
      <Text>Apagar/Desabilitar Conta</Text>
      <Pressable title="Voltar"
      onPress={() => {
        navigation.navigate("iniciologado")
      }}>
        <Text>Voltar</Text>
        </Pressable>
    </View>
  )
  
}
function chat() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Papo</Text>
      <Pressable title="Voltar"
      onPress={() => {
        navigation.navigate("iniciologado")
      }}><Text>Voltar</Text>
      </Pressable>
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
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  imagem: { 
    width: 100,
    height: 100,
    borderRadius: 50

  }
  
})
