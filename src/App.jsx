import { MenuProvider } from "./context/MenuContext";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  return (
    <>
      <MenuProvider>
        <Header />
      </MenuProvider>
      <main className="flex flex-col items-center gap-4 p-6 mt-20">
        <img
          src="/Hjem.jpg"
          alt="Hjem"
          id="Hjem"
          className="w-80 h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src="/Maki.jpg"
          alt="Maki"
          id="MakiRolls"
          className="w-80 h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src="/Sashimi.jpg"
          alt="Sashimi"
          id="Sashimi"
          className="w-80 h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <img
          src="/Nigiri.jpg"
          alt="Nigiri"
          id="Nigiri"
          className="w-80 h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </main>
    </>
  );
};

export default App;
