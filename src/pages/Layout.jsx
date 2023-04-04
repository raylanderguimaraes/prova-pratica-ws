import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="my-4 h-screen">{children}</main>
      <Footer />
    </>
  );
}
