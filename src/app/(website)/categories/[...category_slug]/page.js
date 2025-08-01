

import React from 'react'
import MainLayout from '../../common components/MainLayout';
import CategoryListing from '../../components/CategoryListing';

export const metadata = {
  title: "Category Listings",
  description: " ",
};

export default function page() {
  
  return (
    <>
      <MainLayout>
        <CategoryListing/>
      </MainLayout>
    </>
  )
}


// whatever we write on url like:/men/women it will run after naming folder as [category_slug]
// next js run serverside
// way of getting value from url [...category_slug] three dots ahead provide permission to access n number of services like men/women etc. by using slash in searchbox.