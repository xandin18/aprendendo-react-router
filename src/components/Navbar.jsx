import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerNav = styled.nav`
    display: flex;
    gap: 15px;
        Link{
            
        }
`

const Navbar = () => {
    return(
        <ContainerNav>
            <Link to="/">Home</Link>
            <Link to="/contate">Contato</Link>
        </ContainerNav>
    )
};

export default Navbar;

