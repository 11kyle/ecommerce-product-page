import { useState } from "react";
import iconDelete from '../assets/icon-delete.svg';
import product1Thumbnail from '../assets/image-product-1-thumbnail.jpg';

export const ShoppingCart = ({ open, handleClose }) => {
  const [items, setItems] = useState(["one-item"]);

  return (
    <>
      {open && 
        <div className="absolute top-20 right-0 mr-2 bg-hslWhite shadow-xl rounded-lg w-[97%] md:w-64">
          <h1 className="font-bold pl-4 py-3 border-b-2">Cart</h1>
          <div className="flex flex-col text-xs">
            {items.length ? 
              <div className="m-3">
                <div className="flex items-center justify-between mb-2">
                  <img className="w-9 rounded-sm" src={product1Thumbnail} alt="show "/>
                  <div className="text-hslDarkGrayishBlue ml-2">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$125.00 x 3 <span className="font-bold text-hslBlack">$375.00</span></p>
                  </div>
                  <button className="ml-auto">
                    <img className="w-3" src={iconDelete} alt="delete" />
                  </button>
                  
                </div>
                <button className="bg-hslOrange text-hslWhite font-bold w-full rounded-md py-3">Checkout</button>
              </div>
              :
              <p className="text-hslDarkGrayishBlue font-bold text-center my-16">Your cart is empty.</p>
            }
          </div>
        </div>
      }
    </>
  );
}



{/* <>
      {open && 
        <div className="absolute top-14 right-0 bg-hslWhite shadow-xl rounded-lg w-full md:w-64">
          <h1 className="font-bold pl-4 py-3 border-b-2">Cart</h1>
          <div className="flex flex-col text-xs">
            {items.length ? 
              <div className="m-3">
                <div className="flex items-center justify-between mb-2">
                  <img className="w-9 rounded-sm" src={product1Thumbnail} alt="show "/>
                  <div className="text-hslDarkGrayishBlue ml-2">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>$125.00 x 3 <span className="font-bold text-hslBlack">$375.00</span></p>
                  </div>
                  <button className="ml-auto">
                    <img className="w-3" src={iconDelete} alt="delete" />
                  </button>
                  
                </div>
                <button className="bg-hslOrange text-hslWhite font-bold w-full rounded-md py-3">Checkout</button>
              </div>
              :
              <p className="text-hslDarkGrayishBlue font-bold text-center my-auto">Your cart is empty.</p>
            }
          </div>
        </div>
      }
    </> */}