import "../styles/main.scss";

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
