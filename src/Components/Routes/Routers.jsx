import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import MainContent from '../MainContent';
import Explore from '../SideBarContents/Explore';
import Courses from '../SideBarContents/Courses';
import Categories from '../SideBarContents/Categories';
import Epeisodes from '../SideBarContents/Epeisodes';
import Books from '../SideBarContents/Books';
import Articles from '../SideBarContents/Articles';

export let routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainContent />,
        children: [
          {
            index: true,
            // path:'explore',
            element: <Explore />
          },
          {
            path: '/courses',
            element: <Courses />
          },
          {
            path: '/categories',
            element: <Categories />
          },
          {
            path: '/epeisodes',
            element: <Epeisodes />
          },
          {
            path: '/books',
            element: <Books />
          },
          {
            path: '/articles',
            element: <Articles />
          }
        ]
      }
    ]
  }
])