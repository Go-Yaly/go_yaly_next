import "./global.css";
import Navbar from "../global/components/Navbar";
import Footer from "../global/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
