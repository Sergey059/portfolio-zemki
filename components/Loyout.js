import Header from "./Header";
import Footer from "./Footer";

const Loyout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Loyout;
