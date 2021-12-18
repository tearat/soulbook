import React from "react"
import styled from "@emotion/styled"
import customTheme from "../../assets/theme"
import { Link } from "react-router-dom"
import { z } from "../../helpers/zalgo"

const { md } = customTheme.size
const { white, light } = customTheme.colors

const StyledLink = styled.div`
  display: block;
  font-size: ${md};
  font-family: Verdana;
  font-weight: 100;
  a {
    padding: 10px;
    padding-bottom: 30px;
    display: block;
    color: ${white};
    text-decoration: none;
    // background: yellow;
  }
  &:hover {
    background: ${light};
  }
  svg {
    margin-right: 10px;
    path {
      fill: ${white};
    }
  }
`

type Props = {
  link: LinkType
}

export type LinkType = {
  href: string
  title: string
  icon: () => JSX.Element
}

export const NavLink: React.FC<Props> = ({ link }) => (
  <StyledLink>
    <Link to={link.href}>
      {link.icon()}
      {z(link.title)}
    </Link>
  </StyledLink>
)
