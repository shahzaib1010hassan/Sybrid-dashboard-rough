import "./App.css";
import MainRoutes from "./Routes";

import { NavbarSimple } from "./Pages/Compnent/Navbar";
function App() {
  return (
    <div className="App">
      <div className="flex flex-row bg-lightGrey w-full">
        <NavbarSimple />
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
