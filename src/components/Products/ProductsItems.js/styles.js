import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    containerItem:{
        flex:1,
        borderRadius:10,
        marginHorizontal:25,
        marginVertical:15,
        padding:10,
        backgroundColor:"#DBDBDB",
        height:120,
    },
    item:{
        flex:1,
    borderRadius:10,
    shadowColor: '#000000',
    shadowOffset:{
        width: 0, height:3
    },
    shadowRadius:8,
    elevation:4,
    justifyContent:"center",
    alignItems:"center",
    padding: 12,
    },
    title:{
        fontFamily:"OpenSansItalic",
        fontSize:15,
    },
    detailText:{
        fontFamily:"OpenSansMedium",
        fontSize:15,
        marginHorizontal:10,
        marginVertical:10,
    }
})