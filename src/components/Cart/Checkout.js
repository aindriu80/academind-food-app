import { useRef, useState } from 'react'
import classes from './Checkout.module.css'

const isEmpty = (value) => value.trim().length === ''
const isNotFiveChars = (value) => value.trim().length !== 5

const Checkout = (props) => {
  const [formInputValidty, setFormInputValidty] = useState({
    name: true,
    street: true,
    city: true,
    eirCode: true,
  })

  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalCodeInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredEircode = postalCodeInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = isEmpty(enteredName)
    const enteredStreetIsValid = isEmpty(enteredStreet)
    const enteredCityIsValid = isEmpty(enteredCity)
    const enteredEircodeIsValid = isEmpty(enteredEircode)

    setFormInputValidty({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      eircode: enteredEircodeIsValid,
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredEircodeIsValid

    if (!formIsValid) {
      return
    }
    // Submit the cart data
  }

  const nameControlClasses = `${classes.control}${
    formInputValidty.name ? '' : classes.invalid
  }`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidty.name && <p>please enter a valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidty.street && <p>please enter a valid name</p>}
      </div>

      <div className={classes.control}>
        <label htmlFor="eircode">Eircode</label>
        <input type="text" id="eircode" ref={postalCodeInputRef} />
        {!formInputValidty.eircode && <p>please enter a valid name</p>}
      </div>

      <div className={classes.control}>
        <label htmlFor="cty">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidty.city && <p>please enter a valid name</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout
