import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";


const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    
    <div className="box">
  <svg><rect>
    </rect></svg>
    <div className="product__content content">
        
      <div className="product__img">
      <Link to={`/cars/${id}`}>
        <img src={image01} alt="product-img"/>
        </Link>
        </div>
        <h5>
          <Link to={`/cars/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>    
    </div>

  );
};

export default ProductCard;
