import React, { useEffect, useState, Fragment } from "react";
import "./OrderHistory.css";
import { useSelector } from "react-redux";
import { getorderHistory } from "../../firebase/firebase";
import CartEmpty from "../CartEmpty/ItemsEmpty";
import { useHistory } from "react-router-dom";

export default function OrderHistory() {
  const history = useHistory();
  const userId = useSelector((state) => state.authUserState.authUserId);
  const [orderHistoryState, setorderHistoryState] = useState();
  let orders = [];

  const fetchOrderhistory = async () => {
    setorderHistoryState(await getorderHistory(userId));
  };
  useEffect(() => {
    fetchOrderhistory();
  }, [userId]);

  const handleItemClick = (id) => {
    history.push(`product/${id}`);
  };

  if (orderHistoryState) {
    orders = Object.keys(orderHistoryState).map((item) => {
      return (
        <div className="order-history__container" key={item}>
          <div className="order-history__header">
            <div className="order-history__header-item">
              <p>Order Placed</p>
              <p>
                {orderHistoryState[item][orderHistoryState[item].length - 1]}
              </p>
            </div>
            <div className="order-history__header-item order-id">
              <p>Order Id</p>
              <p>{item}</p>
            </div>
          </div>
          <div className="order-history__items">
            {orderHistoryState[item].map(
              ({ image, description, title, id }, index) => {
                if (index < orderHistoryState[item].length - 1) {
                  return (
                    <div
                      className="order-history__item"
                      key={id}
                      onClick={() => handleItemClick(id)}
                    >
                      <div className="order-history__item-image">
                        <img src={image} alt="item" />
                      </div>
                      <div className="order-history__item-info">
                        <p className="order-history__item-title">{title}</p>
                        <p className="order-history__item-description">
                          {description}
                        </p>
                      </div>
                    </div>
                  );
                }
              }
            )}
          </div>
        </div>
      );
    });
  }

  return (
    <div className="order-history__wrapper">
      {orderHistoryState ? (
        <Fragment>
          <h5>Order History</h5>
          {orders}
        </Fragment>
      ) : (
        <CartEmpty text="There are no Orders Available. Let's Buy some items." />
      )}
    </div>
  );
}
