import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';

export interface TaskProps {
  id: number;
  text: string;
  completed: boolean;
  onComplete: (id: number) => void;
}

export default function TaskItem({
  id,
  text,
  completed,
  onComplete,
}: TaskProps) {
  return (
    <TouchableWithoutFeedback onPress={() => onComplete(id)}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{text}</Text>
        </View>
        <View
          style={completed ? styles.circularCompleted : styles.circular}
        ></View>
      </View>
    </TouchableWithoutFeedback>
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
