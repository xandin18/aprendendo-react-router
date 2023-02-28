import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ContainerContact = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 10px;
`
const Button = styled.button`
    background-color: transparent;
    font-weight: bold;
    border: transparent;
    transition: all 0.2s ease-in-out;
    font-size: 17px;
    margin: 10px;
    color: white;

        :hover{
            border-radius: 10px;
            padding: 10px;
            border: 1px solid white;
        }
`

function Contate(){
    const navigate = useNavigate();

    const handleHome = () => {
        console.log('Enviado para o home');
        return navigate('/');
    }

    return(
        <ContainerContact>
            <h1>Página de Contatos</h1>
            <p>
                <Link to='/contate/1'>Forama de Contato 1</Link>
            </p>
            <p>
                <Link to='/contate/2'>Forama de Contato 2</Link>
            </p>
            <p>
                <Link to='/contate/3'>Forama de Contato 3</Link>
            </p>
            <Button onClick={handleHome}>Voltar para o Home</Button>
        </ContainerContact>        
    )
}

export default Contate;