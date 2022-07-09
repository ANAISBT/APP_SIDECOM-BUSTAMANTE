import { FlatList, Text, View } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { addToCart, confirmCart, removeItem } from "../store/action/CartActions";
import { useDispatch, useSelector } from "react-redux";

import CartItems from "../components/Carrito/CartItem/CartItems";
import React from "react";

const Cart =()=>{
    const dispatch=useDispatch();
    const cart = useSelector(state=>state.cart.items);
    const total= useSelector(state=>state.cart.total);

    const onHandlerDeleteCart =(id)=>{
        dispatch(removeItem(id));
    }

    const onHandlerConfirmCart=()=>{
        dispatch(confirmCart(cart,total));
    }

    const renderItem = ({item})=> 
    (<CartItems item={item} onDelete={onHandlerDeleteCart} /> );

    return(
    <View style={styles.container}>
        <View style={styles.cartList}>
            <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id}
            />
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.confirm} onPress={()=> onHandlerConfirmCart()}>
                <Text style={styles.Text}>Confirmar</Text>
                <View style={styles.total}>
                    <Text style={styles.Text}>Total</Text>
                    <Text>S/{total}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>)
}
export default Cart;
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
        backgroundColor:"white",
        paddingBottom:120,
    },
     cartList:{
         flex:1,
     },
     footer:{
         padding:15,
         borderTopColor:'#6CCFF6',
         borderTopWidth:1,
         alignContent:"center",
     },
     confirm:{
         backgroundColor:'#cccccc',
         borderRadius:5,
         padding:10,
         flexDirection:"row",
         alignItems:"center",
         justifyContent:"space-between",
         alignContent:"center",
     },
     Text:{
         fontSize:14,
         fontFamily:'OpenSansMedium',

     },
     total:{
     fontSize:15,
         fontFamily:'OpenSansBold',
     }
})