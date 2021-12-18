import React from "react"
import { Container } from "@chakra-ui/react"
import customTheme from "../../assets/theme"
import { LinkType, NavLink } from "./NavLink"
import { PhoneIcon, AddIcon } from "@chakra-ui/icons"

const links: LinkType[] = [
  { href: "/", title: "Soulbook", icon: () => <PhoneIcon /> },
  { href: "/add", title: "Add a soul", icon: () => <AddIcon /> },
]

export const Navigator = () => {
  const { medium, dark } = customTheme.colors

  return (
    <Container
      bg={medium}
      minHeight={600}
      p={20}
      borderRight={`2px solid ${dark}`}
      borderBottomLeftRadius={20}
    >
      {links.map((link, index) => (
        <NavLink key={index} link={link}></NavLink>
      ))}
    </Container>
  )
}
