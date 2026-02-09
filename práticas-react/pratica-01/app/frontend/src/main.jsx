import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { HomePage } from './pages/HomePage.jsx';
import { ContatoPage } from './pages/ContatoPage.jsx';
import { SobrePage } from './pages/SobrePage.jsx';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: App},
      { path: "/sobre", Component: SobrePage} ,
      { path: "/contato", Component: ContatoPage}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
