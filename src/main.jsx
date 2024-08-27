import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// instalando o pacote de dependencias para criar as rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  
import App from './App.jsx'
import Error from './routes/Error.jsx'

/*Criando a funcao createBrowserRouter */
const router= createBrowserRouter([
  {
    /* CRIANDO OS ELEMENTOS PAI */
    path:'/', elemento:<App/>,
    errorElement:<Error/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*criando a desestruturação para que seja renderizada */}
    <RouterProvider router={router} />
  </StrictMode>,
)
