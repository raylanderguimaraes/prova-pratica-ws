import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="h-screen">
      <Head>
        <title>My Products</title>
      </Head>

      <Header />
      <main className="  ">{children}</main>
      <Footer />
    </div>
  );
}
