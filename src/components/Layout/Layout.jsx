import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
  return (
    <div className="c-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
