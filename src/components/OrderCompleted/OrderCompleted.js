import React from "react";
import "./OrderCompleted.css";
import { FcApproval } from "react-icons/fc";
import { useHistory } from "react-router-dom";

export default function OrderCompleted() {
  const history = useHistory();
  const handleBuyMore = () => {
    history.push("/");
  };
  return (
    <div className="order-completed__wrapper">
      <h1>Thank You</h1>
      <div className="order-completed__image">
        <FcApproval />
      </div>
      <div className="order-completed__description">
        Order Placed Succesfully
      </div>
      <div className="order-completed__buy-more" onClick={handleBuyMore}>
        Buy More
      </div>
    </div>
  );
}
