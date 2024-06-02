import { Layout } from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AppContextProvider } from "./components/AppContext";
import MainRoutes from "./routes/MainRoutes";
import PrivateRoutes from "./routes/PrivateRoutes"
import { createLocalStorage, getAllLocalStorage } from "./services/storage";

function App() {
  !getAllLocalStorage() && createLocalStorage();

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes/>
            <PrivateRoutes/>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
