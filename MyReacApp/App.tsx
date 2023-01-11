import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface Todo {
  id: string
  title: string
  completed: boolean
}

export default function App() {

  const [input, onChangeText] = useState("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handlePress = () => console.log('handle press');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputSection}>
        <TextInput style={styles.input} onChangeText={onChangeText} value={input} placeholder={'Enter todo title...'} />
        <Button title='Add todo' onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  inputSection: {
    flexDirection: 'row',
    gap: 1,
  },
  input: {
    flex: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
  }
});
