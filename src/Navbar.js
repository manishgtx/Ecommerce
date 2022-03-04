import { FaEllipsisH } from "react-icons/fa";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="px-10 text-base py-3 flex justify-between border-b border-neutral-300">
      <div className="flex gap-x-4 items-center font-semibold text-lg text-black">
        <Link to="/">Home</Link>
        <Link to="products">Products</Link>
      </div>
    </nav>
  );
};

export default Navbar;
