import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";


function App() {

  return (
    <>
      <Navbar />
      <div className="font-Press h-80 text-white flex items-center justify-center text-5xl md:text-7xl lg:text-8xl">
        Quotify
      </div>
      <Text />
    </>
  );
}

export default App;
