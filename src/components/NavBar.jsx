const NavBar = () => {
  return (
    <nav className="hidden md:flex space-x-6">
      <a href="#" className="text-pink-900 font-medium hover:text-pink-600">
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
    </nav>
  );
};

export default NavBar;
