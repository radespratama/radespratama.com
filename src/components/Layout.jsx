import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-wrap flex-grow min-h-screen px-4">{children}</main>
      <Footer />
    </>
  );
}
