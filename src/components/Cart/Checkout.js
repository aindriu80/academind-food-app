import classes from './Checkout.module.css'
// import classes from '../../index.css'
const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>

      <div className={classes.control}>
        <label htmlFor="eircode">Eircode</label>
        <input type="text" id="eircode" />
      </div>

      <div className={classes.control}>
        <label htmlFor="cty">City</label>
        <input type="text" id="city" />
      </div>

      <button type="button" onClick={props.onCancel}>
        Confirm
      </button>

      <button>Cancel</button>
    </form>
  )
}

export default Checkout
