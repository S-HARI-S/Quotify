import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";


function App() {

  return (
    <>
      <Navbar />
      <div className="font-Press h-80 text-white text-xl flex items-center justify-center">
        Quotify
      </div>
      <Text />


    </>
  );
}

export default App;
