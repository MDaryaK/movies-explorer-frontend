import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AuthorizedLayout({ children }) {
  return (
    <>
      <Header type="profile" />
      <main>{children}</main>
      <Footer />
    </>
  )
}
