import * as actionTypes from "./actionTypes"
import { DispatchType, IPhone, PhoneAction } from "./types"

export function addPhone(phone: IPhone) {
  const action: PhoneAction = {
    type: actionTypes.ADD_PHONE,
    phone,
  }

  return (dispatch: DispatchType) => dispatch(action)
}

export function removePhone(phone: IPhone) {
  const action: PhoneAction = {
    type: actionTypes.REMOVE_PHONE,
    phone,
  }
  return (dispatch: DispatchType) => dispatch(action)
}
