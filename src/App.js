import './App.css';
import MainPage from './components/main-page/main-page';
import Introduction from './components/introduction/introduction';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      errorElement: <div>404 Page Not Found</div>,
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
