import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Categories } from '../components/Main';
import React from 'react';
import { selectCategory } from '../store/action/index';

const CategoriesScreen=({navigation}) =>{
  const dispatch= useDispatch()
  const categories=useSelector(state=>state.category.categories)
  const categoryProducts=useSelector(state=>state.products.filteredProducts)
const onHandlerSelectedCategory =(item)=>{
  dispatch(selectCategory(item.id))
  navigation.navigate('ProductsScreen',{
    name:item.title,
  })
}
  return (
    <View style={styles.container}>
      <Categories 
      data={categories}
      onSelected={onHandlerSelectedCategory}
      />
    </View>
  );
}
export default CategoriesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});