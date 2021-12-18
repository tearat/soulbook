import { phonesMock } from "../mocks/phones"
import * as actionTypes from "./actionTypes"
import { IPhone, PhoneAction, PhoneState } from "./types"

const initialState: PhoneState = {
  phones: [...phonesMock],
  // phones: [],
}

const reducer = (
  state: PhoneState = initialState,
  action: PhoneAction
): PhoneState => {
  switch (action.type) {
    case actionTypes.ADD_PHONE:
      const newArticle: IPhone = {
        id: state.phones[state.phones.length - 1].id + 1,
        title: action.phone.title,
        phone: action.phone.phone,
        description: action.phone.description,
        tags: action.phone.tags,
      }
      return {
        ...state,
        phones: state.phones.concat(newArticle),
      }
    case actionTypes.REMOVE_PHONE:
      const updatedPhones: IPhone[] = state.phones.filter(
        (phone) => phone.id !== action.phone.id
      )
      return {
        ...state,
        phones: updatedPhones,
      }
  }
  return state
}

export default reducer
