import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { defaultTheme } from "./styles/themes/defaults";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Transactions />
   </ThemeProvider>
  )
}