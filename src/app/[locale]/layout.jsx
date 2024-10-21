import Header from "./Header";
import Providers from "./providers";

export const metadata = {
  title: "Portfolio",
  description: "Introduce myself",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <Header />
      <main className="bg-white dark:bg-black">{children}</main>
    </Providers>
  );
}
