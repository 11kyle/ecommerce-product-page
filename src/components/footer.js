import logo from '../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="relative md:absolute bottom-0 flex flex-row justify-center w-full md:w-[95%] lg:w-[97%] xl:w-full max-w-[984px] py-9 mx-0 md:mx-5 mt-40 border-t-2">
      <div className="hidden md:block self-center mx-10">
        <img src={logo} alt="logo" />
      </div>
      <div className="mx-10">
        <h2 className="font-bold">Menu</h2>
        <ol>
          <li><a className="hover:underline underline-offset-2" href="#">Collections</a></li>
          <li><a className="hover:underline underline-offset-2" href="#">Men</a></li>
          <li><a className="hover:underline underline-offset-2" href="#">Women</a></li>
        </ol>
      </div>
      <div className="mx-10">
        <h2 className="font-bold">Company</h2>
        <ol>
          <li><a className="hover:underline underline-offset-2" href="#">About Us</a></li>
        </ol>
      </div>
      <div className="mx-10">
        <h2 className="font-bold">Contact</h2>
        <ol>
          <li><a className="hover:underline underline-offset-2" href="#">Support</a></li>
          <li><a className="hover:underline underline-offset-2" href="#">Careers</a></li>
          <li><a className="hover:underline underline-offset-2" href="#">FAQs</a></li>
        </ol>
      </div>
    </footer>
  );
}