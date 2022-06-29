import { FlatList, Text, View } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";

import OrderItem from "../components/Orders/Order-item/OrderItems";
import React from "react";
import { orders } from "../constans/data/Orders";

const OrderScreen =()=>{
    const item = orders;
    const onSelectedOrder =(item)=>{

    }


    const renderItem = ({item})=> <OrderItem item={item} onSelected={onSelectedOrder} /> 

    return(
    <View style={styles.container}>
        <View style={styles.OrderList}>
            <FlatList
            data={item}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id}
            />
        </View>
    </View>)
}
export default OrderScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
        backgroundColor:"white",
        paddingBottom:120,
    },
     OrderList:{
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