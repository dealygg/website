import { PageLayout } from 'layouts'
import { Homepage } from 'pages'

export const routes = [
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />
      }
    ]
  }
]
