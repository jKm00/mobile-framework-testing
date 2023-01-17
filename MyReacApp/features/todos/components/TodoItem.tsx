import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import { Todo } from '../models/Todo';

export interface TaskProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
}

export default function TaskItem({ todo, toggleComplete }: TaskProps) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableWithoutFeedback onPress={() => toggleComplete(todo.id)}>
          <View style={styles.square}></View>
        </TouchableWithoutFeedback>
        <Text style={styles.itemText}>{todo.title}</Text>
      </View>
      <View
        style={todo.completed ? styles.circularCompleted : styles.circular}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    marginRight: 10,
    borderRadius: 5,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  circularCompleted: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#55BCF6',
  },
});
