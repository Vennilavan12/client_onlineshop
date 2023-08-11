import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(()=>{
    dispatch(getTotals())
  },[cart,dispatch])
  
  const handleRemoveFromCart=(element)=>{
    dispatch(removeFromCart(element))
  }

  const handleDecreaseCart=(element)=>{
    dispatch(decreaseCart(element))
  }

  const handleIncreaseCart=(element)=>{
    dispatch(addToCart(element))
  }

  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  console.log(cart);
  return (
    <>
    {cart.cartTotalQuantity!==0?
      <div className="container">
        <h2 class="text-center">Shopping Cart</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.cartItems?.map((element) => (
              <tr>
                <th scope="row">1</th>
                <td>
                  <div className="d-flex">
                    <img
                      src={element.img}
                      alt=""
                      style={{ height: "100px", width: "100px" }}
                    />
                    <div>
                      <small>{element.name}</small>
                      <br />
                      <small>{element.desc}</small>
                      <br />
                      <button type="button" class="btn btn-link btn-sm"
                      onClick={()=>handleRemoveFromCart(element)}
                      
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td className="p-3">${element.price}</td>
                <td className="p-3">
                  <button type="button" class="btn btn-light btn-sm"
                  onClick={()=>handleDecreaseCart(element)}
                  >
                    <span>
                      <i class="bi bi-dash"></i>
                    </span>
                  </button>
                  <span className="p-1"> {element.cartQuantity}</span>
                  <button type="button" class="btn btn-light btn-sm"
                  onClick={()=>handleIncreaseCart(element)}>
                    <span>
                      <i class="bi bi-plus"></i>
                    </span>
                  </button>
                </td>
                <td className="p-3">${element.price * element.cartQuantity}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <button class="btn btn-danger"
                onClick={()=>handleClearCart()}
                >Clear Cart</button>
              </td>
              <td></td>
              <td></td>
              <td className="text-right">
                <strong>SubTotal:</strong>
              </td>
              <td>
                $
                {cart.cartTotalAmount}
              </td>
            </tr>

           <tr>
  <td></td>
  <td></td>
  <td></td>
  <td colSpan={2} className="text-center">
    <small className="text-muted">Taxes and Shipping Calculated</small>
  </td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
  <td colSpan={2} className="text-center">
    <button class="btn btn-primary px-5" type="button">Checkout</button>
  </td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
  <td colSpan={2} className="text-center">
    <button class="btn btn-outline-secondary px-5" type="button"
    onClick={()=>navigate('/')}
    >
      <i class="bi bi-arrow-left-short"></i> Continue Shopping
    </button>
  </td>
</tr>

          </tfoot>

        </table>
      </div>
  :
  <div className="container">
    <h2 class="text-center">Shopping Cart</h2>
    <h5 class="text-center text-muted my-3">Your cart is currently empty</h5>
    <button class="btn btn-outline-secondary d-block mx-auto my-4" type="button"
    onClick={()=>navigate('/')}>
      <i class="bi bi-arrow-left-short text-center"></i> Start Shopping
    </button>
  
  </div>
            }
    </>
  );
};

export default Cart;
