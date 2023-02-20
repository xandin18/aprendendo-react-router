import React from "react";
import styled from "styled-components";

const ContainerError = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;

        p{
            color: #e5e5e5;
            font-size: 19px;

            b{
                padding: 5px;
                background-color: #2626c9;
                border-radius: 10px;
                color: rgb(203, 203, 203);
            }
        }
    
`

const ErrorPage = () => {
    return (
        <ContainerError>
            <p>Error 404!</p>
            <p>not <b>found!</b></p>
            <p>não foi <b>encontrado!</b></p>
        </ContainerError>
    )
};

export default ErrorPage;