import React from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'
import { colors } from '../utils/colors'
import { fontSizes } from '../utils/sizes'


export default function FocusHistory ({ history }) {

  if (!history || !history.length) return null;

  const renderItem = ({item}) => <Text style={styles.item}>.. {item}</Text>

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Focus History</Text>
      <FlatList 
          data={history}
          renderItem={renderItem}      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    flex: 1
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.lightblue,
    marginBottom: 4,
  }

});