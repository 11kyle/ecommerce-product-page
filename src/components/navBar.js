import { useEffect } from 'react';
import { useState } from 'react';
import iconCart from '../assets/icon-cart.svg';
import iconClose from '../assets/icon-close.svg';
import iconMenu from '../assets/icon-menu.svg';
import avatar from '../assets/image-avatar.png';
import logo from '../assets/logo.svg';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

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
    <header className="flex justify-between items-center bg-white py-4 md:py-10 mx-5 md:border-b-2">
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
            <li><a className="ml-6 mr-40 md:ml-0 md:mr-0" href="#">Collections</a></li>
            <li><a className="ml-6 mr-40 md:ml-0 md:mr-0" href="#">Men</a></li>
            <li><a className="ml-6 mr-40 md:ml-0 md:mr-0" href="#">Women</a></li>
            <li><a className="ml-6 mr-40 md:ml-0 md:mr-0" href="#">About</a></li>
            <li><a className="ml-6 mr-40 md:ml-0 md:mr-0" href="#">Contact</a></li>
          </ol>
        }
        
      </div>
      <div className="flex items-center space-x-8">
        <a href="#">
          <img className="h-[20px] w-[20px]" src={iconCart} alt="shopping cart" />
        </a>
        <a href="#">
          <img className="w-[40px]" src={avatar} alt="profile" />
        </a>
      </div>
    </header>
  );
}