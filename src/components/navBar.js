import { useEffect } from 'react';
import { useState } from 'react';
import iconCart from '../assets/icon-cart.svg';
import iconClose from '../assets/icon-close.svg';
import iconMenu from '../assets/icon-menu.svg';
import avatar from '../assets/image-avatar.png';
import logo from '../assets/logo.svg';
import { ShoppingCart } from './shoppingCart';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  // This is supposed to close the menu while in mobile but open it md: and above
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
    if (window.innerWidth >= 768) setIsOpen(true);
  }

  useEffect(() => {
    if (window.innerWidth >= 768) setIsOpen(true);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex justify-between items-center bg-white py-4 md:py-9 mx-5 md:border-b-2">
      <div className="flex h-[20px]">
        <button className="md:hidden mr-5" onClick={handleOpen}>
          <img src={iconMenu} alt="open menu" />
        </button>
        <button>
          <img src={logo} alt="logo" />
        </button>
        
        {
          isOpen &&
          <ol 
            className="
              flex flex-col space-y-4 fixed top-0 left-0 z-50 bg-white h-screen 
              md:flex-row md:space-y-0 md:space-x-8 md:ml-10 md:relative md:top-auto md:left-auto md:z-auto md:h-auto"
            >
            <li className="md:hidden my-5 ml-3.5">
              <button className="p-2" onClick={handleOpen}>
                <img src={iconClose} alt="open menu" />
              </button>
            </li>
            <li><a className="text-hslBlack font-bold md:text-hslDarkGrayishBlue md:font-normal md:hover:text-hslBlack md:py-10 md:hover:border-b-4 md:hover:border-b-hslOrange ml-6 mr-40 md:ml-0 md:mr-0" href="#">Collections</a></li>
            <li><a className="text-hslBlack font-bold md:text-hslDarkGrayishBlue md:font-normal md:hover:text-hslBlack md:py-10 md:hover:border-b-4 md:hover:border-b-hslOrange ml-6 mr-40 md:ml-0 md:mr-0" href="#">Men</a></li>
            <li><a className="text-hslBlack font-bold md:text-hslDarkGrayishBlue md:font-normal md:hover:text-hslBlack md:py-10 md:hover:border-b-4 md:hover:border-b-hslOrange ml-6 mr-40 md:ml-0 md:mr-0" href="#">Women</a></li>
            <li><a className="text-hslBlack font-bold md:text-hslDarkGrayishBlue md:font-normal md:hover:text-hslBlack md:py-10 md:hover:border-b-4 md:hover:border-b-hslOrange ml-6 mr-40 md:ml-0 md:mr-0" href="#">About</a></li>
            <li><a className="text-hslBlack font-bold md:text-hslDarkGrayishBlue md:font-normal md:hover:text-hslBlack md:py-10 md:hover:border-b-4 md:hover:border-b-hslOrange ml-6 mr-40 md:ml-0 md:mr-0" href="#">Contact</a></li>
          </ol>
        }
        
      </div>
      <div className="relative flex items-center space-x-8">
        <a href="#">
          <img className="h-[20px] w-[20px]" src={iconCart} alt="shopping cart" onClick={toggleCart} />
        </a>
        {/* <ShoppingCart 
          open={isCartOpen}
          handleClose={handleCartClose}
        /> */}
        <a className="rounded-full hover:border-2 hover:border-hslOrange w-[40px]" href="#">
          <img src={avatar} alt="profile" />
        </a>
      </div>
    
      <ShoppingCart 
        open={isCartOpen}
        handleClose={handleCartClose}
      />
      
    </header>
  );
}