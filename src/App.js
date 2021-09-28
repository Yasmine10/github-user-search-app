import "./App.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Content />
    </div>
  );
}

export default App;
