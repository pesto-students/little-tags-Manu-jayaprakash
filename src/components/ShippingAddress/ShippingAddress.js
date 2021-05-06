import React, { useState} from "react";
import "./ShippingAddress.css";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../actions/index";

export default function ShippingAddress({ setIsAddress }) {
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    address,
    appartment,
    city,
    country,
    state,
    pin,
    phone,
  } = useSelector((state) => state.addressState);
  
  const [userAddress, setUserAddress] = useState({
    firstName,
    lastName,
    address,
    appartment,
    city,
    country,
    state,
    pin,
    phone,
  });

  const handleAddressForm = (e) => {
    e.preventDefault();
    setIsAddress(true);
    dispatch(setAddress(userAddress));
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserAddress({
      ...userAddress,
      [e.target.name]: value,
    });
  };
  return (
    <div className="shipping-address__wrapper">
      <div className="shipping-address__container">
        <h3 className="shipping-address__heading">Shiping Address</h3>

        <form className="shipping-address__form" onSubmit={handleAddressForm}>
          <div className="shipping-address__name">
            <input
              name="firstName"
              value={userAddress.firstName}
              type="text"
              placeholder="First Name *"
              onChange={handleInputChange}
              required
            />
            <input
              name="lastName"
              value={userAddress.lastName}
              type="text"
              placeholder="Last Name"
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            name="address"
            value={userAddress.address}
            type="text"
            placeholder="Address *"
            onChange={handleInputChange}
            required
          />
          <input
            name="appartment"
            value={userAddress.appartment}
            type="text"
            placeholder="Appartmnet (optional)"
            onChange={handleInputChange}
          />
          <input
            name="city"
            value={userAddress.city}
            type="text"
            placeholder="City *"
            onChange={handleInputChange}
            required
          />
          <div className="shipping-address__location">
            <input
              name="country"
              value={userAddress.country}
              type="text"
              placeholder="Country *"
              onChange={handleInputChange}
              required
            />
            <input
              name="state"
              value={userAddress.state}
              type="text"
              placeholder="State *"
              onChange={handleInputChange}
              required
            />
            <input
              name="pin"
              value={userAddress.pin}
              type="number"
              placeholder="PIN Code *"
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            name="phone"
            value={userAddress.phone}
            type="number"
            placeholder="Phone *"
            onChange={handleInputChange}
            required
          />

          <button className="shipping-address__btn">Continue to Payment</button>
        </form>
      </div>
    </div>
  );
}
