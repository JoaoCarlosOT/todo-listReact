import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './routes/home.jsx';
import Cadastrar from './routes/cadastrar.jsx';
import Error from './routes/error.jsx';
import UserID from './routes/userID.jsx';
import Editar from './routes/Editar.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"cadastrar",
        element:<Cadastrar/>
      },
      {
        path:"cadastrar/:id",
        element:<UserID/>
      },
      {
        path:"editar/:id",
        element:<Editar/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
