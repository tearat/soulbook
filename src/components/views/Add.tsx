import React, { useState } from "react"
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react"
import customTheme from "../../assets/theme"
import { z } from "../../helpers/zalgo"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { addPhone } from "../../store/actions"

export const AddView = () => {
  const { white, dark, light, medium } = customTheme.colors
  const { md, lg } = customTheme.size

  const [title, setTitle] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")

  type FormData = {
    title: string
    phone: string
    description: string
  }

  const clearForm = () => {
    setTitle("")
    setPhone("")
    setDescription("")
    setTags("")
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    sendPhone({ title, phone, description })
    clearForm()
  }

  const dispatch: Dispatch<any> = useDispatch()

  const sendPhone = (formData: FormData) => {
    const tagsSplitted = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag)
    const phoneToSend = {
      ...formData,
      id: 0,
      tags: tagsSplitted,
    }
    dispatch(addPhone(phoneToSend))
  }

  const styleProps = {
    FormLabel: {
      fontSize: md,
      mb: 30,
      color: white,
    },
    Input: {
      fontSize: md,
      mb: 20,
      p: 10,
      bg: dark,
      border: "none",
      color: white,
      w: 600,
    },
  }

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
        {z("Add a soul")}
      </Heading>
      <Divider />
      <form onSubmit={(event) => submitForm(event)}>
        <FormControl>
          <FormLabel htmlFor="title" {...styleProps.FormLabel}>
            {z("Inscribe upon me the name for the doomed soul")}
          </FormLabel>
          <Input
            id="title"
            name="title"
            placeholder={z("title")}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            {...styleProps.Input}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phone" {...styleProps.FormLabel}>
            {z("Enter the numbers marked by Satan")}
          </FormLabel>
          <Input
            id="phone"
            name="phone"
            placeholder={z("phone")}
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            {...styleProps.Input}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="description" {...styleProps.FormLabel}>
            {z("Share your thoughts about the prey")}
          </FormLabel>
          <Input
            id="description"
            name="description"
            placeholder={z("description")}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            {...styleProps.Input}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="tags" fontSize={md} mb={30} color={white}>
            {z("Place tags to describe this creature (separate by comma)")}
          </FormLabel>
          <Input
            id="tags"
            name="tags"
            placeholder={z("tags")}
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            {...styleProps.Input}
          />
        </FormControl>

        <Button
          loadingText="Submitting"
          _hover={{ bg: light, cursor: "pointer" }}
          type="submit"
          {...styleProps.Input}
          bg={dark}
          w={400}
          pb={60}
          p={20}
        >
          {z("Submit")}
        </Button>
      </form>
    </Container>
  )
}
