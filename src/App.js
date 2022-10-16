import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CustomizedRoute from "./CustomizedRoute";
import Header from "./components/partitials/Header";
import Footer from "./components/partitials/Footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <CustomizedRoute />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
