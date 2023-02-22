import styled from "styled-components";

// Serve para reaproveitar uma página se for o caso!
import { Outlet } from "react-router-dom";

// Navegando entre as páginas!
import Navbar from "./components/Navbar";


const ContainerApp = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;

  align-items: center;
  justify-content: center;

    b{
      padding: 5px;
      background-color: #e01c1c;
      border-radius: 10px;
      color: rgb(255, 255, 255);
    }
`


function App() {
  return (
    <ContainerApp>
      <Navbar/>
      <h1>React <b>Router</b></h1>
      <Outlet/>
      <footer>---FOOTER---</footer>
    </ContainerApp>
  );
}

export default App;
