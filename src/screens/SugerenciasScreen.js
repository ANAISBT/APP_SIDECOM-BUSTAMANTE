import { FlatList, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import PlaceItem from '../components/PlaceItem';
import {loadPlaces} from '../store/PlaceSlices';

const SugerenciasScreen=({navigation})=> {
  // const dispatch=useDispatch();
  const places = useSelector((state) => state.place.places);
  // const onSelectPlace = (place) => {
  //   navigation.navigate("SuggestDetails", { placeId: place.id });
  // }
  // const renderItem = ({ item }) => {
    const renderItem = (data) => {
      <PlaceItem
      title={data.item.title}
      image={data.item.image}
      address="Nueva Sugerencia"
      onSelect={()=>navigation.navigate("SuggestDetails")}/>
    // return <PlaceItem {...item} address="Hola" onSelect={onSelectPlace}/>;
  }
   const ListEmptyComponent = () => {
     return  (
       <View style={styles.emptyContainer}>
         <Text>No hay Productos</Text>
       </View>
     )
   }

  //   useEffect(()=>{
  //     dispatch(loadPlaces());
  //   },[]);

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