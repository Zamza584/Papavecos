import { Inter } from "next/font/google";
import Nav from "./Nav";
import "./sass/styles.scss"
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Papavecos",
  description: "Restaurante Papavecos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' rel='stylesheet' type='text/css' />

      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <header>
          <Nav />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <div className="footer">
            <div className="footer__links">
              <Link href="/menu">menu</Link>
              <Link href="/nosotros">nosotros</Link>
            </div>
            <div className="footer__socials">
              <a href="">Whatsapp</a>
              <a href="">Facebook</a>
              <a href="">Instagram</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
