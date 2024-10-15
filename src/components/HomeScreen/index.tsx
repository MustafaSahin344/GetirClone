import React from 'react'
import { ScrollView } from 'react-native'
import HeaderMain from "../HeaderMain"
import BannerCarousel from "../BannerCarousel "
import MainCategories from "../MainCategories"





const index = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:"#f5f5f5"}} >
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />


    </ScrollView>

  )
}

export default index 