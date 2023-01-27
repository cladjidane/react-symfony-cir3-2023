import "./App.css";

import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Titre du content.jsx");

  return (
    <div className="container-fluid p-0">
      <Header level="1" />

      <div className="row container m-auto">
        <Content title={title} />

        <Sidebar
          changeTitle={(title) => {
            setTitle(title);
          }}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
