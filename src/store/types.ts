export type IPhone = {
  id: number
  title: string
  phone: string
  description: string
  tags: string[]
}

export type PhoneState = {
  phones: IPhone[]
}

export type PhoneAction = {
  type: string
  phone: IPhone
}

export type DispatchType = (args: PhoneAction) => PhoneAction
