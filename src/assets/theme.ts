import { extendTheme } from "@chakra-ui/react"

const colors = {
  bg: "#050505",
  dark: "#224",
  medium: "#446",
  light: "#77a",
  white: "#eee",
}

const size = {
  sm: "14px",
  md: "20px",
  lg: "36px",
}

const customTheme = extendTheme({
  colors,
  size,
  borderRadius: "20px",
})

export default customTheme
