import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../assets/CSS/style.css'

export default function MainLayout({children}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}
