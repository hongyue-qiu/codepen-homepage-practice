import './App.css';
import 'antd/dist/antd.css'
import React from "react";
import NavBar from "./component/navBar/NavBar";
import Homepage from "./pages/homepage";

const App = () => {
  return (
    <div className="App">
        <NavBar />
        <aside>
            <Homepage/>
        </aside>
    </div>
  );
}

export default App;
