import { FlatList, StyleSheet, Text, View } from 'react-native'

import PlaceItem from '../components/PlaceItem';
import React from 'react'
import { useSelector } from 'react-redux';

const SugerenciasScreen=({navigation})=> {
  const places = useSelector((state) => state.place.places);
  const onSelectPlace = (place) => {
    navigation.navigate("SuggestDetails", { placeId: place.id });
  }
  const renderItem = ({ item }) => {
    return <PlaceItem {...item} address="Hola" onSelect={onSelectPlace}/>;
  }
  const ListEmptyComponent = () => {
    return  (
      <View style={styles.emptyContainer}>
        <Text>No hay lugares</Text>
      </View>
    )
  }

  return (
    <FlatList 
      style={styles.container}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
    />
  )
}

export default SugerenciasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  }
  });