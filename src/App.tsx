import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaults"
import { GlobalStyle } from "./styles/global"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}

export default App
