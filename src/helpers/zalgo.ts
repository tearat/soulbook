import zalgo from "to-zalgo"

const defaultSettings = {
  // size: "mini",
  up: false,
}

export const z = (text: string, settings?: object) => {
  const textUpper = text ? text.toUpperCase() : text
  return zalgo(textUpper, { ...defaultSettings, settings })
}
