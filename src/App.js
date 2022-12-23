import Pages from "./pages/Pages";
import Category from "./components/Category";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Hello</h1>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
