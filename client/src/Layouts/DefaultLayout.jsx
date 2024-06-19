import React from "react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import "../Components/Styles/Layout.css";
//import "../App.css";

const DefaultLayout = () => {
  return (
    <div className="default-layout">
        <header className="header mb-2">
            <Header/>
        </header>

        <main className="main">
            Main page Content
        </main>
        
        <footer className="footer">
            <Footer/>
        </footer>
      
    </div>
  );
};

export default DefaultLayout;