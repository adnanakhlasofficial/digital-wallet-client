import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b sticky top-0 z-50 bg-popover">
        <Navbar />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="border-t pt-8 bg-popover mt-20">
        <Footer />
      </footer>
    </div>
  );
}
