import { FlatList, Text, View } from "react-native";
import React,{useEffect} from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { deleteOrder, getOrders } from "../store/action/OrderActions";
import { useDispatch, useSelector } from "react-redux";

import OrderItem from "../components/Orders/Order-item/OrderItems";

const OrderScreen =()=>{
    const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  const onDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={onDeleteOrder} />
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.orderList}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
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