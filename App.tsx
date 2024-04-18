import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/welcome';
import { Pet } from './components/pet';
import { PetQuality } from './components/petQualities';


export default function App() {
  const petName = {
    firstName:"shei",
    lastName:"Gaju"
  };

  const qualities = [
    {
      qualOne:'a lizard',
      qualTwo:'a cat',
      qualThree:'scary as a mother who cough her child eating her secret stash',
      age:20

    },
    {
      qualOne:"green",
      qualTwo:"sometimes yellow",
      qualThree:"purple",
      age:20

    }
  ]

  return (
    <View style={styles.container}>
      <Welcome name="Sandrine" age={40} gender={false}/>
      <Pet petName={petName} type="Konodo Dragon"/>
      <PetQuality qualities={qualities}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
