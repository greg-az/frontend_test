import { products, Iproducts } from '../constants'

export const initialState: Iproducts[] = products

export default (state = initialState, action: { type: any }) => {
  switch (action.type) {
    default:
      return state
  }
}