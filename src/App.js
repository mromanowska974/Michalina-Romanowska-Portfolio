import logo from './logo.svg';
import './App.css';
import MainPage from './components/main-page/main-page';
import { path } from 'framer-motion/client';
import Introduction from './components/introduction/introduction';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      children: [
        {
          path: '/',
          element: <Introduction/>
        },
        {
          path: "about-me",
          element: <AboutMe/>
        },
        {
          path: "projects",
          element: <Projects/>
        },
        {
          path: "contact",
          element: <Contact/>
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
