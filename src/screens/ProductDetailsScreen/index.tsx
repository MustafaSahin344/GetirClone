import React, { useEffect, useState }  from 'react'
import { View,Text, ActivityIndicator, ScrollView } from 'react-native'
import { Product } from '../../models'
import ImageCarousel from '../../components/ImageCarousel'
import  DetailBox from '../../components/DetailBox'
import DetailProperty from '../../components/DetailProperty'
import CardButton from '../../components/CardButton'

function index(props) {

    const [product, setProduct]= useState<Product>()
 useEffect(() => {
   console.log( "kffkf", props.route.params.item);
   
    setProduct(props.route?.params?.item)

 },[props])
 console.log("Our product is", product)
 if(!product){
    return <ActivityIndicator color={"#5D3EBD"} />
 }
    return (
        <View style={{flex:1}} >
  <ScrollView>
       <ImageCarousel images={product.images} />
        <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar}  />
        <Text style={{paddingHorizontal:10,paddingVertical:14, color:'#808B99',fontWeight:'600'}} >detayler</Text>
        <DetailProperty/>
  </ScrollView>
  <CardButton item={product} />
  </View>
  )
}

export default index




