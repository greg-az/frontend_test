import { Iproducts } from '../constants'

export const ITEM_REMOVED = 'cart/ITEM_REMOVED'
export const ITEM_ADDED = 'cart/ITEM_ADDED'

interface IitemsMap {
    [index:string]: string;
}

interface ICart {
    totalCost : number,
    itemsMap : IitemsMap
}

const initialState = {
  totalCost: 0.0,
  itemsMap: {}
}

const getCartItem = (state: ICart, itemId: string, item: any) => {
  return state.itemsMap[itemId] || {
    unitPrice: item.unitPrice,
    name: item.name,
    quantity: 0,
    id: itemId,
    price: 0.0
  }
}

const addCartItem = (cartItem: any) => {
  const quantity = cartItem.quantity + 1
  const price = cartItem.unitPrice * quantity
  return {
    ...cartItem, 
    quantity,
    price
  }
}

const removeCartItem = (cartItem: any) => {
    const quantity = cartItem.quantity - 1
    const price = cartItem.unitPrice * quantity
    return {
      ...cartItem,
      quantity,
      price
    }
}

const computeCost = (itemsMap: IitemsMap) => {
    
    let values = Object.keys(itemsMap).map(key => itemsMap[key]);

    return Math.round(100 * values.reduce((cost, entry: any) => {
        return cost + entry.price
    }, 0.0)) / 100
}

export default (state = initialState , action: any) => {

  switch (action.type) {

    case ITEM_ADDED: {

        const {item} = action
        
        const cartItem = getCartItem(state, item.id, item)  
        
        const itemsMap = {
            ...state.itemsMap,
            [item.id]: addCartItem(cartItem)
        }
        
        const totalCost = computeCost(itemsMap)
        
        return {
            ...state,
            itemsMap,
            totalCost
        }
    }

    case ITEM_REMOVED: {
    
        const {itemId} = action
        
        const cartItem = getCartItem(state, itemId, null)
        
        const entry = removeCartItem(cartItem)
        
        const itemsMap : IitemsMap = {
            ...state.itemsMap,
            [itemId]: entry
        }
        
        if (entry.quantity === 0) {
            delete itemsMap[itemId]
        }
        
        const totalCost = computeCost(itemsMap)

        return {
            ...state,
            itemsMap,
            totalCost
        }
    }

    default:
      return state
  }
}

export const addToCart = (item: Iproducts) => {
  return (dispatch: any) => {
    dispatch({
      type: ITEM_ADDED,
      item
    })
  }
}

export const removeFromCart = (itemId: string) => {
    return (dispatch: any) => {
        dispatch({
        type: ITEM_REMOVED,
        itemId
        })
    }
}