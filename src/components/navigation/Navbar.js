import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation-container">
      <div className="navlink-wrapper">
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>

      <div className="navlink-wrapper">
        <NavLink to="/photo-transformer">Photo Transformer</NavLink>
      </div>

      <div className="navlink-wrapper">
        <NavLink to="/image-gallery">Image Gallery</NavLink>
      </div>

      <div className="navlink-wrapper">
        <NavLink to="/capitalize">Capitlize First</NavLink>
      </div>

      <div className="navlink-wrapper">
        <NavLink to="/truncate-words">Truncate Paragraph</NavLink>
      </div>

      <div className="navlink-wrapper">
        <NavLink to="/random-hex">Random Hex</NavLink>
      </div>

      <div className="navlink-wrapper">
        <NavLink to="/rock-paper-scissors">Rock Paper Scissors</NavLink>
      </div>

      <div className="navlink-wrapper">
        <NavLink to="/box-shadow">Box Shadow Generator</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
