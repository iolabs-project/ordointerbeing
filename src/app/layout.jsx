import "../styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Komunitas Zen Plum Village",
  description: "Komunitas Zen Plum Village",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/navbar-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/navbar-logo.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
