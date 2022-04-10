import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

import { createContext, useState } from "react";

export const mainContext = createContext();

function App() {

  const themes = {
    dark: {
      backgroundColor: "black",
      color: "white"
    },
    light: {
      backgroundColor: "white",
      color: "black"
    }
  }

  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(true);
  const [colorName, setColorName] = useState("Purple");

  const data = {
    themes,
    color,
    setColor,
    counter,
    setCounter,
    colorName,
    setColorName,
  }

  return (
    <div className="App">
      <mainContext.Provider value={data}>
        <Header />
        <Main />
        <Footer />
      </mainContext.Provider>
    </div>
  );
}

export default App;
