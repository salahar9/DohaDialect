// Index l'Assli

import React from "react";

// reactstrap components

// core components

// index page sections
import Main from "./IndexSections/Main.js";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import TranslateBox from "./IndexSections/TranslateBox.js";
import Navbar from "./IndexSections/Navbar";
import Translate from "./IndexSections/Translate.js";
import DDFooter from "components/Footers/DDFooter.js";
const Index = () => {
  return (
    <>
      {
        // <Navbar />
      }
      <Main />
      <TranslateBox />
    </>
  );
};
/* class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return <DemoNavbar />;
  }
}*/

export default Index;
