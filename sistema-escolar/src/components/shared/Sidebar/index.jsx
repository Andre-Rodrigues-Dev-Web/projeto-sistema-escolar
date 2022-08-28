import { Link } from "react-router-dom";
import { ContainerSidebar } from "./style";

function Sidebar() {
  return (
    <ContainerSidebar>
      <div className="container">
        <div className="logo">
          <h1>Sistema Escolar</h1>
        </div>
        <ul className="links">
          <Link href="/">Home</Link>
          <Link href="/perfil">Home</Link>
        </ul>
      </div>
    </ContainerSidebar>
  );
}

export default Sidebar;
