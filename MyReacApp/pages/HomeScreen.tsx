import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useState } from 'react';
import { Todo } from '../features/todos/models/Todo';
import TodoItem from '../features/todos/components/TodoItem';
import AddTaskForm from '../features/todos/components/AddTaskForm';

export interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({
  navigation: { navigate },
}: HomeScreenProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = (title: string) => {
    Keyboard.dismiss();
    if (title.length === 0) return;

    setTodos([
      ...todos,
      {
        id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
        title: title,
        desc: '',
        completed: false,
      },
    ]);
  };

  const toggleCompleted = (id: number) => {
    const completedTaskIndex = todos.findIndex((t) => t.id === id);
    if (completedTaskIndex === undefined) return;

    todos[completedTaskIndex].completed = !todos[completedTaskIndex].completed;

    setTodos([...todos]);
  };

  const deleteCompleted = () => {
    setTodos([...todos.filter((t) => t.completed === false)]);
  };

  const navigateToItem = (todo: Todo) => {
    navigate('TodoDetails', { todo: todo });
  };

  return (
    <SafeAreaView style={styles.main}>
      {/* Today's tasks */}
      <View style={styles.section}>
        <View style={styles.sectionTitleWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <TouchableWithoutFeedback onPress={deleteCompleted}>
            <Text>Delete completed</Text>
          </TouchableWithoutFeedback>
        </View>

        <ScrollView style={styles.itemsWrapper}>
          {/* Task items */}
          {todos.map((todo) => {
            return (
              <TouchableOpacity
                key={todo.id}
                onPress={() => navigateToItem(todo)}
              >
                <TodoItem
                  todo={todo}
                  toggleComplete={(id) => toggleCompleted(id)}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Create task section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.createTaskSection}
      >
        <AddTaskForm onSubmit={addTask} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemsWrapper: {
    height: '100%',
  },
  createTaskSection: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    paddingHorizontal: 20,
  },
});
