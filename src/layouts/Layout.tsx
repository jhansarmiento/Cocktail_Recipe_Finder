import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="mx-auto container py-6">
        <Outlet />
      </main>
    </>
  )
}
