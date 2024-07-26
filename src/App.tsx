import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { defaultTheme } from './styles/themes/defaults'
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
