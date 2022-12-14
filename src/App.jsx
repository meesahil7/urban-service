import "./App.css";
import Login from "./Components/Login/Login";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <Login />
    </div>
  );
}

export default App;
