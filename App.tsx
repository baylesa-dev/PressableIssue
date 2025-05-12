import React, {useCallback} from 'react';
import {ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';
import {
  FlatList,
  GestureHandlerRootView,
  Pressable,
} from 'react-native-gesture-handler';

const fakeUsers = [
  {id: '1', name: 'John Doe'},
  {id: '2', name: 'Jane Smith'},
  {id: '3', name: 'Alice Johnson'},
  {id: '4', name: 'Bob Brown'},
  {id: '5', name: 'Charlie Davis'},
  {id: '6', name: 'Diana Prince'},
  {id: '7', name: 'Ethan Hunt'},
  {id: '8', name: 'Felicity Smoak'},
  {id: '9', name: 'George Clooney'},
  {id: '10', name: 'Hannah Montana'},
  {id: '11', name: 'Ian Malcolm'},
  {id: '12', name: 'Jack Sparrow'},
  {id: '13', name: 'Katherine Johnson'},
  {id: '14', name: 'Leonardo DiCaprio'},
  {id: '15', name: 'Mia Wallace'},
];

function App(): React.JSX.Element {
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<(typeof fakeUsers)[0]>) => (
      <Pressable
        style={styles.listItem}
        onPress={() => console.log('Item Pressed!')}>
        <Text>{item.name}</Text>
      </Pressable>
    ),
    [],
  );

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Pressable
          style={styles.card}
          onPress={() => console.log('Card Pressed!')}>
          <View>
            <Text style={styles.text}>Hello World</Text>
          </View>
        </Pressable>

        <FlatList
          style={styles.list}
          data={fakeUsers}
          renderItem={renderItem}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    flexGrow: 1,
  },
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
  },
  card: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
});

export default App;
