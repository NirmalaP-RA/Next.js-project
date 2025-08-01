import React from 'react'
import MainLayout from '../common components/MainLayout';
import Login from '../components/home page components/Login';

export const metadata = {
  title: "Login",
  description: " ",
};
export default function page() {
  return (
    <>
      <MainLayout>
        <Login/>
      </MainLayout>
    </>
  )
}
