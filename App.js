import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { TextInput } from 'react-native-web';
import Header from './src/componentes/Header';
import Search from './src/componentes/Search';
export default function App() {
  return (
    <View style={styles.container}>
      {/* INICIO DO HEADER */}
       <Header></Header>
      {/* INICIO PESQUISA */}
      <Search></Search>
      {/* <view style={styles.containerSearch}> 
      <TextInput 
      placeholder = 'Digite o filme que deseja buscar'
      style={styles.inputSearch}
      ></TextInput>
      
      <TouchableOpacity>
      <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
      
      </view>
       */}
       {/* inicio Banner (não teria outra view?)*/}

      <text style={styles.textBanner}> Em Cartaz </text>
      <Image source={require("./assets/adão.jpg")}
      style={styles.imageBanner} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1193',
    alignItems: 'center',
   
  },
  // viewHeader:{
  //   justifyContent: 'space-between',
  //   flexDirection:'row',
  //   marginTop: 20,
  //   alignItems: 'center',
  //   width: "90%"
  // },
  // textHeader: {
  //   fontSize: 22,
  //   color: 'white',
  //   fontWeight: 'bold'
  // },
  //Passamos parra o style.js
  // containerSearch: {
  //   marginTop: 20,
  //   width: '90%',
  //   backgroundColor: "white",
  //   borderRadius: 5,
  //   padding: 8,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center'
  // },
  // inputSearch: {
  //   height: 40,
  //   padding: 5,
  //   width: '100%'
  // },
  imageBanner: {
    width: '90%',
    height:200,
    marginTop:15,
    borderRadius: 10
  },
  textBanner: {
    color: 'white',
    width: '90%',
    fontSize: 30,
    marginTop: 20,
    fontWeight: 'bold'
  }
});
