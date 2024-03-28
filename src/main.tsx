import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App, { loader as appLoader, action as appAction } from './App.tsx'
import Post, { loader as postLoader } from './routes/Post/Post.tsx'
import './index.css'

import Edit from './routes/Post/edit.tsx'

//

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
    action: appAction,
  },
  {
    path: "/post/:postId",
    element: <Post />,
    loader: postLoader,
  },
  {
    path: "/post/:postId/edit",
    element: <Edit />,
    loader: postLoader,
  }
])


createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)

