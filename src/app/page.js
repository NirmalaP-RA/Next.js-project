import Image from "next/image";
import Home from "./components/Home";
import MainLayout from "./common components/MainLayout";

export const metadata = {
  title: "MayBell - Online furniture store",
  description: " ",
};

export default function Page() {
  return (
   <>
   <MainLayout>
    <Home/>
   </MainLayout>
   </>

  );
}
