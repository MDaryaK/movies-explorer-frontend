import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProfileLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
