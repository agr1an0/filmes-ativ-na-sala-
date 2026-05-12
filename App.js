
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { TextInput } from 'react-native-web';
export default function App() {
  return (
    <View style={styles.container}>
       <View style = {styles.viewHeader}>
        
      <Feather name="menu" size={24} color="black" />

      <Text style = {styles.textHeader}> TECFILMES </Text>

      <TouchableOpacity> 

      </TouchableOpacity>
      
      </View>

      <view style={styles.containerSearch}> 
      <TextInput 
      placeholder = 'Digite o filme que deseja buscar'
      ></TextInput>

      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1193',
    alignItems: 'center',
   
  },
  viewHeader:{
    justifyContent: 'space-between',
    flexDirection:'row',
    marginTop: 20,
    alignItems: 'center',
    width: "90%"
  },
  textHeader: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold'
  },
  containerSearch: {
    marginTop: 20,
    width: '90%',
    backgroundColor: "white"
  },
});
