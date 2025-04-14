import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./routes/pages/AboutPage";

const App = () => {
  return (
    <div>
      <Header />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default App;
