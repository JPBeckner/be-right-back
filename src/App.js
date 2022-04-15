import Marquee from "./components/marquee";

const defaultBackgroundColor = "#333"
const defaultFontColor = "#a4f644"

function App() {
  return (
    <div className="App">
      <Marquee 
      backgroundColor={defaultBackgroundColor} 
      color={defaultFontColor} 
      />
    </div>
  );
}

export default App;
