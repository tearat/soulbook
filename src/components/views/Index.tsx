import React from "react"
import { Container, Divider, Heading, Text } from "@chakra-ui/react"
import customTheme from "../../assets/theme"
import { TableComponent } from "../table/Table"
import { z } from "../../helpers/zalgo"
import { IPhone, PhoneState } from "../../store/types"
import { shallowEqual, useSelector } from "react-redux"

export const IndexView = () => {
  const phones: IPhone[] = useSelector(
    (state: PhoneState) => state.phones,
    shallowEqual
  )

  const { white, medium } = customTheme.colors
  const { lg } = customTheme.size

  return (
    <Container bg={medium} minHeight={600} p={20} borderBottomRightRadius={20}>
      <Heading
        as="h2"
        color={white}
        m={0}
        fontSize={lg}
        fontWeight={300}
        pb={50}
      >
        {z("Soulbook")}
      </Heading>
      <Divider />
      {phones.length ? (
        <TableComponent data={phones} />
      ) : (
        <Text color={white}>{z("Soulbook is empty now...")} </Text>
      )}
    </Container>
  )
}
