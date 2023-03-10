import "./App.css";
import AppProvider from "./context/AppContext";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Home />
      </div>
      ;
    </AppProvider>
  );
}

export default App;
