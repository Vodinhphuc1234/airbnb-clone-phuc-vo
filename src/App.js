import { Fragment } from "react";
import "./App.css";
import Footer from "./components/partitials/Footer";
import Header from "./components/partitials/Header";
import CustomizedRoute from "./CustomizedRoute";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function App() {
  return (
    <Fragment>
      <Header />
      <CustomizedRoute />
      <Footer />
    </Fragment>
  );
}

export default App;
