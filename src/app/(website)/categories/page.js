import React from 'react'
import CategoryListing from '../components/CategoryListing'
import MainLayout from '../common components/MainLayout';
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
