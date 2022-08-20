import { PageLayout } from 'layouts'
import { Homepage, PrivacyPolicy } from 'pages'

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
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />
  }
]
