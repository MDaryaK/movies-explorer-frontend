import Header from "../components/Header";

export default function ProfileLayout({ children }) {
  return (
    <>
      <Header type="profile" />
      <main>{children}</main>
    </>
  )
}
