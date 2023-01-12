import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

export default function AddTaskForm() {
  const [input, setInput] = useState('');

  const handleSubmit = () => {};

  return (
    <View style={styles.form}>
      <TextInput
        style={[styles.input, styles.shadow]}
        placeholder={'Add a task'}
        onChangeText={(text) => setInput(text)}
        value={input}
        onSubmitEditing={handleSubmit}
      />
      <TouchableWithoutFeedback>
        <View style={[styles.button, styles.shadow]}>
          <Text style={styles.buttonLabel}>+</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  input: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 15,
    marginRight: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#55BCF6',
    padding: 15,
    borderRadius: 10,
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    color: '#fff',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
