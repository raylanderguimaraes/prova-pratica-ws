import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className=" h-screen">
      <Head
        title={"My Products"}
      />
      <Header />
      <main className=" lg:pb-[800px] pb-[2000px] ">{children}</main>
      <Footer />
    </div>
  );
}
