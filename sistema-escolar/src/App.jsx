import { GlobalStyles } from "./components/shared/Global/style";
import Sidebar from "./components/shared/Sidebar";
import { Content, Template } from "./components/shared/Theme/style";
import { Routes, Route } from "react-router-dom";
import { Home, Perfil } from "./routes";
function App() {
  return (
    <Template>
      <GlobalStyles />
      <Sidebar />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
        </Routes>
      </Content>
    </Template>
  );
}

export default App;
