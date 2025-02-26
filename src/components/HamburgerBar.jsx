import { useMenu } from "../context/MenuContext";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerBar = () => {
  const { isOpen, toggleMenu } = useMenu();
  return (
    <>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-pink-900">
          {isOpen ? (
            <span className="text-2xl">
              <IoCloseSharp />
            </span>
          ) : (
            <span className="text-2xl">
              <GiHamburgerMenu />
            </span>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-pink-200 p-4 flex flex-col items-center space-y-4 shadow-lg md:hidden">
          <a
            href="#Hjem"
            className="text-pink-900 font-medium hover:text-pink-600"
          >
            Hjem
          </a>
          <a
            href="#MakiRolls"
            className="text-pink-900 font-medium hover:text-pink-600"
          >
            Maki Rolls
          </a>
          <a
            href="#Sashimi"
            className="text-pink-900 font-medium hover:text-pink-600"
          >
            Sashimi
          </a>
          <a
            href="#Nigiri"
            className="text-pink-900 font-medium hover:text-pink-600"
          >
            Nigiri
          </a>
        </div>
      )}
    </>
  );
};

export default HamburgerBar;
