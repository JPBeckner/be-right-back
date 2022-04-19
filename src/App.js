import Base from "./layouts/base"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Base/>
      </ChakraProvider>
    </div>
  );
}

export default App;
