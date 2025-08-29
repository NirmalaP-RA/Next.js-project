// "use client"
import React from 'react'
import ProductCard from '../common components/ProductCard'


export default function ProductSection({title,productData}) {
 
  return (
    <>
       <p className="mx-auto mt-10 mb-5 max-w-[1200px] px-5">{title}</p>
      
          {/* <!-- Recommendations --> */}
          <section
            className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4"
          >
            {/* <!-- 1 --> */}
              {
                                  productData.map((v,i)=>{
                                    return(
                                      <ProductCard key={i}/>
                                    )
                                  })
                                }
                
          
            </section>
          
    </>
  )
}
