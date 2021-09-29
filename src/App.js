import React, { useState } from "react";

import "./assets/styles/main.scss";
import "./App.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  console.log(darkMode);

  const [searchValue, setSearchValue] = useState("");

  const handleSearchCallback = (searchValue) => {
    console.log(searchValue);
    setSearchValue(searchValue);
  }

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} onClick={toggleDarkMode} />
      <SearchBar parentCallback={handleSearchCallback} />
      <Content user={searchValue} />
    </div>
  );
}

export default App;
