import Navbar from "../components/global/navbar/Navbar";
import Footer from "../components/global/footer/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function MainLayout() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
