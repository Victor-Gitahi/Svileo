import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import { AuthContextProvider } from "./context/AuthContext";
import Nav from "./components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Svileo",
  description: "The best live betting app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Nav />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
