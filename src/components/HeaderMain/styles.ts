import { StyleSheet,Dimensions } from "react-native";

const {height} =Dimensions.get("window")
const styles = StyleSheet.create({
    headerMain:{
        height: height * 0.064,
        backgroundColor:"#F7D102",
        
     
        
    },
    headerOne:{ 
        height: height * 0.064,
        width:"78%",
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:"8%",
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
    },
    image:{
        width:30,
        height:30
    },
    headerOneWiew:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:8,
        paddingLeft:8,
        borderLeftColor:"#F3F2FD",
        borderLeftWidth:2
    },
    headerTwo:{
        width:"28%",
        backgroundColor:"#F7D102",
        height:height*0.064,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:10
        
    }



})

export default styles;