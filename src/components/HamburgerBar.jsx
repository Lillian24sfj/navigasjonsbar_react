import { useMenu } from "../context/MenuContext";

const HamburgerBar = () => {
  const { isOpen, toggleMenu } = useMenu();
  return (
    <>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-pink-900">
          {isOpen ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-pink-200 p-4 flex flex-col items-center space-y-4 shadow-lg md:hidden">
          <a href="#" className="text-pink-900 font-medium hover:text-pink-600">
            Hjem
          </a>
          <a href="#" className="text-pink-900 font-medium hover:text-pink-600">
            Maki Rolls
          </a>
          <a href="#" className="text-pink-900 font-medium hover:text-pink-600">
            Sashimi
          </a>
          <a href="#" className="text-pink-900 font-medium hover:text-pink-600">
            Nigiri
          </a>
        </div>
      )}
    </>
  );
};

export default HamburgerBar;
