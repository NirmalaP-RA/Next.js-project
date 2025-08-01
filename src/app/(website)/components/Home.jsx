"use client"
import React, { useState } from 'react'
import BestCollection from './home page components/BestCollection'
import DeliveryOption from './home page components/DeliveryOption'
import CategorySection from './CategorySection'
import Offer from './home page components/Offer'
import ProductSection from './ProductSection'

export default function Home() {
  const [topNewArrival,setTopNewArrival]=useState([1,2,3,4]);
  const [recommendations,setRecommendations]=useState([1,2,3,4,5,6,7,8]);
  return (
    <>
      <BestCollection/>
      <DeliveryOption/>
      <CategorySection/>
      <ProductSection title="TOP NEW ARRIVAL" productData={topNewArrival}/>
      <Offer/>
      <ProductSection title="RECOMMENDED FOR YOU" productData={recommendations}/>
      
     
      
    </>
  )
}
