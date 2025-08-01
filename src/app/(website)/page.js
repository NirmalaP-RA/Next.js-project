import Image from "next/image";
import Home from "./components/Home";
import MainLayout from "./common components/MainLayout";
export const metadata = {
  title: "MayBell - Online furniture store",
  description: " ",
};

export default function page() {
  return (
   <>
   <MainLayout>
    <Home/>
   </MainLayout>
   </>

  );
}

// what to do when i want to make website and admin both in next js?
// create two folder name with round bracket one for website another for admin