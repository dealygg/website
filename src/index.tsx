import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import App from './App'
import { store } from 'store'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import common_en from 'translations/en/common.json'
import common_bs from 'translations/bs/common.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en
    },
    bs: {
      common: common_bs
    }
  }
})

const container = document.getElementById('root')!
const root = createRoot(container)

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
