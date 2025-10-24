import Navbar from "../components/global/navbar/Navbar";
import Footer from "../components/global/footer/Footer";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
