import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Task from './components/Task';
import { useEffect, useState } from 'react';
import AddTaskForm from './components/AddTaskForm';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (input.length === 0) return;

    setTasks([
      ...tasks,
      {
        id: tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1,
        text: input,
        completed: false,
      },
    ]);
    setInput('');
  };

  const toggleCompleted = (id: number) => {
    const completedTaskIndex = tasks.findIndex((t) => t.id === id);
    if (completedTaskIndex === undefined) return;

    tasks[completedTaskIndex].completed = !tasks[completedTaskIndex].completed;

    setTasks([...tasks]);
  };

  const deleteCompleted = () => {
    setTasks([...tasks.filter((t) => t.completed === false)]);
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
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                completed={task.completed}
                onComplete={(id) => toggleCompleted(id)}
              />
            );
          })}
        </ScrollView>
      </View>

      {/* Create task section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.createTaskSection}
      >
        <AddTaskForm />
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
