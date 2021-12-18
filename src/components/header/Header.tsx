import React from "react"
import { Box, Container, Heading } from "@chakra-ui/react"
import customTheme from "../../assets/theme"
import { z } from "../../helpers/zalgo"

export const Header = () => {
  const { dark, white } = customTheme.colors
  const { lg } = customTheme.size

  return (
    <Container>
      <Box bg={dark} p={20}>
        <Heading
          color={white}
          fontSize={lg}
          fontWeight={300}
          m={0}
          pb={50}
          textAlign="center"
          letterSpacing={10}
        >
          {z("soulbook")}
        </Heading>
      </Box>
    </Container>
  )
}
