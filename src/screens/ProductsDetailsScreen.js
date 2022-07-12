import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Colors } from '../constans/themes/colors';
import React from 'react';
import {addToCart} from '../store/action/CartActions';

const ProductsDetails=({ navigation })=> {
  const dispatch = useDispatch();
  const product=useSelector((state)=>state.products.selected);
  const {title,description,price}=product;

  const onHandlerAddToCart=(item)=>{
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.container}>
      <View style={styles.productDetails}>
      <Text style={styles.title}>Name:</Text>
      <Text>{title}</Text>
      <Text style={styles.title}>Description:</Text>
      <Text>{description}</Text>
      <Text style={styles.title}>Price:</Text>
      <Text>{price}</Text>
      <Button color={Colors.primary} title='Añadir al carrito' onPress={()=>onHandlerAddToCart(product)}/>
      </View>
    </View>

  );
}
export default ProductsDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productDetails: {
    height: 300,
    alignItems: "center",
    justifyContent: "space-around",
},
  title:{
    fontFamily:"OpenSansBold",
    fontSize:15,
    margin: 10,
  }
});