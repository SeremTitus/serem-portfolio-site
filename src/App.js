import { Route,Routes } from "react-router-dom";
import Layout from "../../react-first-app/src/components/layout/Layout";
import HomePage from "./pages/HomePage.js";
import PortfolioPage from "./pages/PortfolioPage.js";


function App() {
  return (
      <Layout>
          <Routes>
              <Route path='/home' element={<HomePage />}/>
              <Route path='/portfolio' element={<PortfolioPage />}/>
          </Routes>             
      </Layout>   
  );
}

export default App;
