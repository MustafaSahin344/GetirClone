import React from 'react'
import { View,Text,TouchableOpacity,Image,Dimensions,} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { connect, Connect } from 'react-redux';
import * as actions from "../../redux/actions/cartActions"
import { Product } from '../../models';
type ProductItemType={
  item: Product;
  addItemToCart:(a:Product) => void;
}

const {width,height}=Dimensions.get("window")




function index({item,addItemToCart}: ProductItemType) {
  const navigation = useNavigation()
  return (
<TouchableOpacity 
onPress={()=> navigation.navigate("ProductDetails",{item: item})}
style={{
    width:width*0.3,
    marginTop:12,
    height:height*0.24,
    marginLeft:12,
    marginBottom:6
}}>
    <Image style={{width:width*0.28,height:width*0.28,borderRadius:12,borderBottomWidth:0.1,borderColor:"gray"}} source={{uri:item?.image}} />
    <View style={{flexDirection:"row",marginTop:10,alignItems:"center"}} >
        <Text style={{fontSize:11.4,color:"#747990", textDecorationLine:'line-through'}} >
        <Text> {"\u20BA"} </Text>{item?.fiyat}
        </Text>
        <Text style={{
          color:"#5D3EBD",
          fontWeight:'bold',
          fontSize:12,
          marginLeft:4
        }} >
          <Text> {"\u20BA"} </Text>{item?.fiyatIndirimli}

        </Text>
    </View>
    <Text style={{fontSize:12,fontWeight:"600",marginTop:5}} > {item?.name} </Text>
    <Text style={{color:'#747990',fontSize:12,marginTop:4,fontWeight:'500'}} > {item?.miktar} </Text>
    <TouchableOpacity onPress={() => {addItemToCart (item) } } style={{ alignItems:"center",justifyContent:"center", shadowRadius:3.8, shadowOpacity:0.05, flex:1,width:30,height:30,borderWidth:0.3,borderColor:'lightgrey',backgroundColor:'white',position:'absolute',right:-6,top:-6,borderRadius:6}} >
      <Entypo name="plus" size={22} color="#5D3EBD" />

    </TouchableOpacity>
</TouchableOpacity>
  )
}
const mapDispatchToProps= (dispatch) => {
  return {
    addItemToCart:(product:Product ) =>
      dispatch(actions.addToCart({ quantity:1,product:product}))
  }
}

export default connect(null, mapDispatchToProps) (index)