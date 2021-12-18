import React from "react"
import { Container } from "@chakra-ui/react"
import customTheme from "../assets/theme"

export const Layout = ({ ...props }) => {
  const { bg } = customTheme.colors
  return (
    <Container bg={bg} minHeight="100vh" p={20}>
      <Container maxWidth={1280} m="0 auto">
        {props.children}
      </Container>
    </Container>
  )
}
