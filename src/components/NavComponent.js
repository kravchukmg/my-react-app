import { NavLink } from "react-router-dom";
import "./NavComponent.css";

export default function NavComponent() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/games" end>
            Games
          </NavLink>
        </li>
        <li>
          <NavLink to="/form">Form</NavLink>
        </li>
        <li>
          <NavLink to="/asd">NotFound</NavLink>
        </li>
      </ul>
    </nav>
  );
}
