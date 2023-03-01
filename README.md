# Aprendizado React Router

`Estudos de diversos do lugares`

## Considerações Iniciais

_Olá me chamo Alexandre e antes de começar o projeto, gostaria de escrever algumas considerções. Este projeto foi pensando em compartilhar meu aprendizado em React Router, usei também styled components para fazer algumas estilizações mas nada demais. Nós somos uma comunidade, se tiver algo a mais que eu possa aprender pode contatar. Além disso esse matérial para vocês estudar, então bom estudos🚀📚_

<small>`Discord` - ｘａｎｄ#6940<small/>

<hr>

## Explicações

### ⭐O que é React Router⭐?

>  O [React Router](https://reactrouter.com/en/main/start/overview) é nada mais nada menos que o pacote mais usado para criar rotas. Rotas é o nome dado as páginas, ele irá ajudar você criar a rota para essa tal página!

> Ela abre várias portas a você, pode criar diversas rotas além disso ele te da opção de redirecionamento rotas aninhadas, página de erro 404 e etc. E então bora aprender🚀!

### Começando com npm install🔗

```jsx
npm install react-router-dom
```

> Agora que está instalado vamos começar!

### **Configurando React Router🤖**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
* Importando algumas configurações da biblioteca react-router
*@returns imports-router
*/
import { BrowserRouter, RouterProvider } from 'react-router-dom'

const router = BrowserRouter([]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

> Depois disso criei 2 components para finalmente fazer as rotas.

### Rotas⏩

> Okay nós precisamos fazer as rotas, vamos chamar elas pela url, então vamos nessa.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Home from './routes/Home.jsx'
import Contate from './routes/Contate.jsx';

/**
* Importando algumas configurações da biblioteca react-router
*@returns imports-router
*/
import { BrowserRouter, RouterProvider } from 'react-router-dom'

const router = BrowserRouter([
	  {
      path:"/",
      element: <Home/>
    },
    {
      path: "contate",
      element: <Contate/>
		}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

> Então os novos componentes foram criados (Home e Contate), foram adicionados a variável como objeto, o path é a rota que irá ser referida na url, o element é aonde a página vai cair, ou seja, ou seja a rota do < Home /> é “/” .

### Outlet✅

> Outlet o que é isso? ele reutiliza o componente, segue o exemplo.

```jsx
import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Home from './routes/Home.jsx'
import Contate from './routes/Contate';

/**
 * Importando algumas configurações da biblioteca react-router
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "contate",
        element: <Contate/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);

```

> Nesse código eu crio um novo objeto que chama o app como elemento, isso quer dizer que ele é o complemento que nós vamos reutilizar.

```jsx
import styled from "styled-components";

//Serve para reaproveitar uma página se for o caso!
import { Outlet } from "react-router-dom";

const ContainerApp = styled.nav`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: auto;

  align-items: center;
`

function App() {
  return (
    <ContainerApp>
      <header>---HEADER---</header>
      <Outlet/>
      <footer>---FOOTER---</footer>
    </ContainerApp>
  );
}

export default App;

```

> Beleza então todas páginas que adicionar naquela variável vai ficar entre o header e o footer.

### Router Link📦

> Então para ficar mais utilizável as rotas vamos criar links para encaminhar até elas sem precisar digitar na url. Primeiros criamos um componente que irá chamar esses links, no caso nós temos 2 ‘home’ e ‘contate’, vamos nessa.

```jsx
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

```

> Agora que já criado só precisaremos chamar esse componente no nosso arquivo principal que é o app.

```jsx
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

```

### ErrorPage❌

> Temos tudo em conformes agora, mas e se o cliente quiser acessar uma página que não existe, então daria um erro mas para ficar bonito e estilizado, podemos usar o errorElement, mas antes temos que criar o componente que irá mostrar o erro.

```jsx
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

```

> Uma simples página estilizada mas poderia fazer o que eu quiser preferi dessa forma enquanto aprendo agora adicionaremos o errorElement á aquele objeto que está armazenando as páginas, então vamos as configurações do Router.

```jsx
import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Home from './routes/Home.jsx'
import Contate from './routes/Contate';
import ErrorPage from './routes/ErrorPage';

/**
 * Importando algumas configurações da biblioteca react-router
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Página de Erro - complemento adicionado
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "contate",
        element: <Contate/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);

```

> Com umas simples alteração está feita a página de erro.

### **Rotas Dinâmicas**🚴🏽‍♀️

> Beleza agora vamos testar as rotas dinâmicas, e se você precisar mostrar uma informação que é na mesma página mas é uma informação diferente, confuso né, bom vamos usar um exemplo, temos a página de contato certo, mas temos vários tipos de contato e temos que mostrar na mesma página então faríamos isto.

> Primeiro criaríamos o componente que irá trazer essa informações para nós:

```jsx
import { Params, useParams } from "react-router-dom";

function ContateDetails(){
    const { id } = useParams();

    return(
        <div>
            <h1>Exibindo mais contatos: {id}</h1>
        </div>
    )
}

export default ContateDetails;

```

> Criado!!! mas o que está acontecendo?

> Bom as rotas estão sendo pegas pelo id, para assim a página receber informações diferentes por isso de usar useParams, o resultado irá ser recebido á partir dele. Continuando com código precisamos voltar para as configurações e adicionar este complemento agora.

```jsx
import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Home from './routes/Home.jsx'
import Contate from './routes/Contate';
import ErrorPage from './routes/ErrorPage';
import ContateDetails from './routes/ContateDetails';

/**
 * Importando algumas configurações da biblioteca react-router
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Página de Erro
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "contate",
        element: <Contate/>
      },
      // Indentificador unico - complemento adicionado
      {
        path: "contate/:id",
        element: <ContateDetails/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);

```

> Partir desse ponto de vista percebemos que já está algo dinâmico, pois cada url entrega um id diferente, podemos imaginar que se tivéssemos um banco de dados seriam contatos diferentes a ser entregados.

### Navegação com lógica⛵

> Que tal agora nós colocarmos um botão que voltaria ao home vamos fazer isso com lógica, vamos a página de contatos e lá criamos um botão já estilizado, depois vamos usar o useNavigate, ele faz com que navegue automáticamente se acontecer algo, no nosso caso é um evento de clique, primeiro importe, depois vamos chamar o useNavigate criando uma variável, depois disso criamos uma arrowFunction para fazer o evento de clique segue a baixo:

```jsx
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

```

### Enviando para páginas 📭

> Podemos resolver problemas de páginas erradas, por exemplo seu site tinha uma página chamada contact, mas você lembrou que era br e atualizou para contate, mas as pessoas não sabe que houve essa atualização para não houver intrigas é só fazer isto:

```jsx
import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate } from 'react-router-dom';
import './index.css';

import App from './App';
import Home from './routes/Home.jsx'
import Contate from './routes/Contate';
import ErrorPage from './routes/ErrorPage';
import ContateDetails from './routes/ContateDetails';

/**
 * Importando algumas configurações da biblioteca react-router
 */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Página de Erro
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "contate",
        element: <Contate/>
      },
      // Indentificador unico
      {
        path: "contate/:id",
        element: <ContateDetails/>
      },
      // Rota atualizada - complemento adicionado
      {
        path: "contact",
        element: <Navigate to="/contate"/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);

```

> Ok agora que nós sabemos bastante sobre react router vamos praticar, vamos aos execícios, faça esse logo abaixo e boa sorte😛.

<hr>
	
> Bom valeu pra quem acompanhou até aqui, espero que tenha ajudado te vejo em próximos projetos, até😄.
