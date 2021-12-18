import React from "react"
import customTheme from "../../assets/theme"
import { Button, Table, Tag, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { z } from "../../helpers/zalgo"
import { IPhone } from "../../store/types"
import { DeleteIcon } from "@chakra-ui/icons"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { removePhone } from "../../store/actions"

type Props = {
  data: IPhone[]
}

export const TableComponent: React.FC<Props> = ({ data }) => {
  const head = ["id", "name", "phone", "description", "tags", " "]
  const { dark, white, light } = customTheme.colors
  const { md } = customTheme.size

  const dispatch: Dispatch<any> = useDispatch()

  const removeSoul = (phone: IPhone) => {
    dispatch(removePhone(phone))
  }

  const cellProps = {
    p: 10,
    pb: 30,
  }

  return (
    <Table
      variant="simple"
      bg={dark}
      p={20}
      color={white}
      w="100%"
      fontSize={md}
    >
      <Thead>
        <Tr>
          {head.map((cell, index) => (
            <Th {...cellProps} key={index} textAlign="left">
              {z(cell)}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((phone) => (
          <Tr key={phone.id}>
            <Td {...cellProps}>{z(phone.id.toString())}</Td>
            <Td {...cellProps}>{z(phone.title)}</Td>
            <Td {...cellProps}>{z(phone.phone)}</Td>
            <Td {...cellProps}>{z(phone.description)}</Td>
            <Td {...cellProps}>
              {phone.tags.map((tag, index) => (
                <Tag
                  key={index}
                  bg="#448"
                  display="inline-block"
                  borderRadius={10}
                  p="3px 10px"
                  fontSize={customTheme.size.sm}
                  mr={5}
                >
                  {z(tag)}
                </Tag>
              ))}
            </Td>
            <Td>
              <Button
                bg="transparent"
                border="none"
                _hover={{ bg: light, cursor: "pointer" }}
                p={10}
                onClick={() => removeSoul(phone)}
              >
                <DeleteIcon color={white} fontSize={24} />
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
