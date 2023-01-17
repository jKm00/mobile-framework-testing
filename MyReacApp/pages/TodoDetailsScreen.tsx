import { View, Text } from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type TodoDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'TodoDetails'
>;

export default function TodoDetailsScreen({ route }: TodoDetailsScreenProps) {
  const { todo } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Todo details screen</Text>
      <Text>{todo?.title}</Text>
    </View>
  );
}
