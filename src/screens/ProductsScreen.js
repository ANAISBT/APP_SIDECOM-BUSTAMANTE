import { Button, StyleSheet, Text, View } from 'react-native';
import React,{useEffect} from 'react';
import { filteredProduct, selectedProduct } from '../store/action/index';
import { useDispatch, useSelector } from 'react-redux';

import { Products } from '../components/Main';

const ProductsScreen=({navigation})=> {
  const dispatch=useDispatch()
const selectedCategory=useSelector(state=>state.category.selected)
  const categoryProducts = useSelector(state=>state.products.filteredProducts)
  // const productsSelected=useSelector(state=>state.products.selected)

useEffect(()=> {
  dispatch(filteredProduct(selectedCategory.id))
},[])

const onHandlerSelectedProducts=(item)=>{
  dispatch(selectedProduct(item.id))
  navigation.navigate('ProductsDetailsScreen',{
    name:item.title,
  })
}
  return (
    <View style={styles.container}>
      <Products 
      data={categoryProducts}
      onSelected={onHandlerSelectedProducts}
      />
    </View>
  );
}
export default ProductsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});