import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProfileLayout({ children }) {
  return (
    <>
      <Header type="profile" />
      <main>{children}</main>
    </>
  )
}
