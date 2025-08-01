"use client"
import React, { useState } from 'react'
import CategoryCard from '../common components/CategoryCard'

export default function CategorySection() {

    const [categories,setCategories]=useState([1,2,3,4,5,6]);
  return (
    <>
       <h2 className="mx-auto mb-5 max-w-[1200px] px-5">SHOP BY CATHEGORY</h2>

    {/* <!-- Cathegories --> */}
    <section
      className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-3 lg:gap-5"
    >
      {/* <!-- 1 --> */}
     {
        categories.map(()=>{
            return(
               <CategoryCard/>
            )
        })
     }
      

      {/* <!-- 2 --> */}

    </section>
    {/* <!-- /Cathegories  --> */}
    </>
  )
}
