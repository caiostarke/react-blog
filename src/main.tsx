import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App, { loader as appLoader, action as appAction } from './App.tsx'
import Post, { loader as postLoader } from './routes/Post/Post.tsx'
import './index.css'

import Edit, { action as editAction } from './routes/Post/edit.tsx'
import { action as destroyAction } from './routes/Post/destroy.tsx'

import Create, {action as createAction} from './routes/Post/create.tsx'
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
    children: [
      {
        path: "/post/:postId/destroy",
        action: destroyAction
      }    
    ]
  },
  {
    path: "/post/:postId/edit",
    element: <Edit />,
    loader: postLoader,
    action: editAction
  },
  {
    path: "/post/create",
    element: <Create />,
    action: createAction
  }
])


createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)

