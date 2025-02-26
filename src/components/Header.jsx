import HamburgerBar from "./HamburgerBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-pink-200 text-pink-900 shadow-md z-50">
      <img src="/sushi.jpg" alt="Logo" className="h-12" />
      <NavBar />
      <HamburgerBar />
    </header>
  );
};

export default Header;
