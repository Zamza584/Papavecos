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
