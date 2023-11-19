import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home.js';
import ForgotPassword from './pages/ForgotPassword.js';
import Privacy from './pages/Portfolio.js';
import SignIn from './pages/Privacy.js';
import SignUp from './pages/SignIn.js';
import Terms from './pages/SignUp.js';
import withRoot from './pages/withRoot.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/ForgotPassword',
        element: <ForgotPassword />,
      },
      {
        path: '/Privacy',
        element: <Privacy />,
      },
      {
        path: '/SignIn',
        element: <SignIn />,
      },
      {
        path: '/SignUp',
        element: <SignUp />,
      },
      {
        path: '/Terms',
        element: <Terms />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
