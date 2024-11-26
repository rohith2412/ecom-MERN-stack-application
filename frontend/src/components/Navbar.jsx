import { Link } from "react-router-dom";
import "./style/Navbar.css";

const Navbar = () => {
  return (
    <div className="flex justify-between m-10 font-poppins cursor-pointer">
      <div className="font-Abril text-7xl justify-center px-10">
        <h3>Selle</h3>
      </div>
      <div>
        <li className="flex gap-16 my-7 mr-20 text-xl">
          <ul className="hover:font-bold"><Link to="/">Home</Link></ul>
          <ul className="bg-black p-2 pt-1 py-1 rounded-xl text-white hover:font-bold"><Link to="/shop">Shop</Link></ul>
          <ul className="hover:font-bold">Contact</ul>
          <ul className="hover:font-bold">About</ul>
        </li>
      </div>
      <div className="flex gap-10 my-7 text-xl">
        <div className="hover:font-bold">Cart</div>
        <div className="hover:font-bold">Profile</div>
      </div>
    </div>

  );
};

export default Navbar;
