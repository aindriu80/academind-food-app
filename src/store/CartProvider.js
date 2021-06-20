import CartContext from './cart-context'
const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {}

  const remoteItemFromCartHandler = (item) => {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: remoteItemFromCartHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
