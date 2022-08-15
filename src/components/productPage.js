import { useEffect } from 'react';

import productImage1 from '../assets/image-product-1.jpg';
import productImage1Thumbnail from '../assets/image-product-1-thumbnail.jpg';
import productImage2 from '../assets/image-product-2.jpg';
import productImage2Thumbnail from '../assets/image-product-2-thumbnail.jpg';
import productImage3 from '../assets/image-product-3.jpg';
import productImage3Thumbnail from '../assets/image-product-3-thumbnail.jpg';
import productImage4 from '../assets/image-product-4.jpg';
import productImage4Thumbnail from '../assets/image-product-4-thumbnail.jpg';
import iconCart from '../assets/icon-cart.svg';
import iconPlus from '../assets/icon-plus.svg';
import iconMinus from '../assets/icon-minus.svg';
import { useState } from 'react';
import Modal from './modal';
import { ShoppingCart } from './shoppingCart';

const product = {
  name: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  images: [
    {
      main: productImage1,
      thumbnail: productImage1Thumbnail
    },
    {
      main: productImage2,
      thumbnail: productImage2Thumbnail
    },
    {
      main: productImage3,
      thumbnail: productImage3Thumbnail
    },
    {
      main: productImage4,
      thumbnail: productImage4Thumbnail
    }
  ]
}

export default function ProductPage(props) {
  const [quantity, setQantity] = useState(0);
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Handle clicks
  useEffect(() => {
    // Handle click outside modal
    function handleClickOutside(event) {
      if (event.target.id === "modal-container") {
        handleClose();
      }
    }
    // Add event listener
    document.addEventListener('click', handleClickOutside);

    // Remove event listener
    return function cleanup() {
      document.removeEventListener('click', handleClickOutside);
    }
  }, []);

  const handleActive = (index) => {
    if (active === index) {
      return setActive(0);
    }
    setActive(index);
  };

  const handleIncrement = () => {
    setQantity(prevCount => prevCount + 1);
  }

  const handleDecrement = () => {
    if (quantity > 0) setQantity(prevCount => prevCount - 1);
  }

  return (
    <main className="md:grid md:grid-cols-2 md:gap-x-6 lg:gap-x-20 md:mt-20 md:mx-10">
      <section>
        <img className="md:rounded-2xl pointer-events-none md:pointer-events-auto" src={product.images[active].main} alt="shoe" onClick={handleOpen} />
        <div className="hidden md:flex md:space-x-6 md:my-6">
          
          {product.images.map((item, index) => {
            return (
              <img className={`md:rounded-2xl md:min-w-0 md:hover:opacity-75 md:border-2 ${active ===index ? "md:opacity-25 md:border-hslOrange" : "md:border-transparent"}`} src={item.thumbnail} alt="shoe" key={index} onClick={() => handleActive(index)} />
            )
          })}

        </div>
      </section>
      <section className="mx-6 md:mt-4 lg:mt-16">
        <div>
          <h2 className="uppercase text-sm font-bold text-hslOrange my-4">Sneaker Company</h2>
          <h1 className="text-3xl font-bold md:text-4xl">{product.name}</h1>
          <p className="text-hslDarkGrayishBlue my-5">{product.description}</p>
        </div>

        <div className="flex justify-start items-center">
          <h1 className="font-bold text-3xl">$125.00</h1>
          <span className="font-bold text-hslOrange bg-hslPaleOrange rounded-md px-1 ml-2">50%</span>
          <p className="line-through text-hslDarkGrayishBlue ml-auto">$250.00</p>
        </div>

        <div className="grid md:grid-cols-3 md:gap-2 md:py-3">
          <div className="flex items-center justify-between bg-hslLightGrayihsBlue rounded-xl my-3 md:my-0">
            <button className="p-6 pr-24 md:p-5 md:hover:opacity-75" onClick={handleDecrement}>
              <img src={iconMinus} alt="minus" />
            </button>
            <p className="font-bold">{quantity}</p>
            <button className="p-6 pl-24 md:p-5 hover:opacity-75" onClick={handleIncrement}>
              <img src={iconPlus} alt="plus" />
            </button>
          </div>
          <button className="flex md:col-span-2 justify-center items-center space-x-4 w-full bg-hslOrange text-hslWhite rounded-xl hover:opacity-75 py-4">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff"/>
            </svg>
            <p className="font-bold">Add to cart</p>
          </button>
        </div>
      </section>
      
      <Modal 
        active={active}
        setActive={setActive}
        handleActive={handleActive}
        product={product} 
        open={isOpen} 
        onClose={handleClose}
      />
    </main>
  );
}