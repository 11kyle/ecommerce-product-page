import { useCallback, useEffect } from 'react';

import iconNext from '../assets/icon-next.svg';
import iconPrevious from '../assets/icon-previous.svg';

const Modal = ({ active, setActive, handleActive, open, onClose, product }) => {
  const handleNext = () => {
    if (active === 3) {
      setActive(0);
    } else {
      setActive(prevActive => prevActive + 1);
    } 
  }
  const handlePrevious = () => {
    if (active === 0) {
      setActive(3);
    } else {
      setActive(prevActive => prevActive - 1);
    } 
  }

  //////////////////////////////////////////////////////
  // Refactor this because it is duplicate of the navBar
  //////////////////////////////////////////////////////
//   const handleResize = () => {
//     if (window.innerWidth < 768) {
//       onClose();
//     }
//   }

  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    
  }, [handleResize]);
  //////////////////////////////////////////////////////
  // Refactor this because it is duplicate of the navBar
  //////////////////////////////////////////////////////

  return (
    <>
      {open && 
        <div id="modal-container" className="z-50 fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex justify-center items-center">


          
            {/* <button className="absolute top-4 right-6" onClick={onClose}>
                <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                </svg>
            </button> */}

            

            <section className="md:relative w-[30rem]">

              <button className="absolute top-56 -left-6 bg-hslWhite rounded-full w-12 h-12" onClick={handlePrevious}>
                <img className="bg-hslWhite rounded-full mx-auto" src={iconPrevious} alt="previous" />
              </button>
              <button className="absolute top-56 -right-6 bg-hslWhite rounded-full w-12 h-12" onClick={handleNext}>
                <img className="bg-hslWhite rounded-full mx-auto" src={iconNext} alt="next" />
              </button>

              <img className="md:rounded-2xl" src={product.images[active].main} alt="shoe" />
              <div className="hidden md:flex md:space-x-6 md:mx-6 md:my-6">
                
                {product.images.map((item, index) => {
                  return (
                    <img className={`md:rounded-2xl md:min-w-0 md:hover:opacity-75 md:border-2 ${active ===index ? "md:opacity-25 md:border-hslOrange" : "md:border-transparent"}`} src={item.thumbnail} alt="shoe" key={index} onClick={() => handleActive(index)} />
                  )
                })}

              </div>
            </section>

        </div>
      }
    </>
  );
};

export default Modal;