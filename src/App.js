import { Divider } from "@chakra-ui/react";
import { AllRoutes } from "./Pages/AllRoutes";
import { Navbar } from "./Pages/Navbar";

function App() {
  return (
    <div style={{
      backgroundColor: "#fdfdf9"
    }}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
