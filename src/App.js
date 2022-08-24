import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  
  return (
    <Box className="App">
      <Navbar />
      <MainRoutes />
    </Box>
  );
}

export default App;
