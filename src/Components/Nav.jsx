import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <NavLink style={{ textDecoration: "none" }} to="/">
          <h1>Home</h1>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to="/view-monster/:id"
        >
          <h1>View monster table </h1>
        </NavLink>
      </ul>
    </nav>
  );
}
