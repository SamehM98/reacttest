import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Products from './Array';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import ListItem from './list_item';

export default function App() {
  return (
    <FlatList style={styles.container}
      vertical
      keyExtractor={(item) => item.id.toString()}
      data={Products}
      renderItem = {({item}) => {
        return <ListItem product={item} />
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 10
  },
});