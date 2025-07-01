import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Layout() {
  return (
    <>
      <div className="min-h-screen bg-[url(/Cocktail_gradient_bg.webp)] bg-fixed bg-cover bg-no-repeat">
        <Header />
        <main>
          <Outlet />
        </main>
        <Modal />
      </div>
    </>
  );
}
