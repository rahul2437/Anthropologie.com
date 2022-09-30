import { Divider } from "@chakra-ui/react";
import Footer from "./Components/Footer/Footer";
import { AllRoutes } from "./Pages/AllRoutes";
import { Navbar } from "./Pages/Navbar";

function App() {
  return (
    <div style={{
      backgroundColor: "#fdfdf9"
    }}>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
