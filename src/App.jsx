import "./App.css";
import Body_1 from "./Components/BodyPage/BodyPage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
  
      {/* <Body_1/> */}
    </div>
  );
}

export default App;
