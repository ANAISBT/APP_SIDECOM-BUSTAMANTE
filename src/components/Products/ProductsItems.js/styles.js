import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    containerItem:{
        flex:1,
        borderRadius:10,
        marginHorizontal:25,
        marginVertical:15,
        padding:10,
        backgroundColor:"#F0F0C9",
        height:100,
    },
    item:{
        flex:1,
    borderRadius:10,
    shadowColor: '#000000',
    shadowOffset:{
        width: 0, height:2
    },
    shadowRadius:8,
    elevation:4,
    justifyContent:"center",
    alignItems:"flex-end",
    padding: 12,
    },
    title:{
        fontFamily:"OpenSansItalic",
        fontSize:15,
    },
    detailText:{
        fontFamily:"OpenSansBold",
        fontSize:15,
        marginHorizontal:10,
        marginVertical:10,
    }
})