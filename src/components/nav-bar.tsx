import { Link, Outlet } from "react-router";
import LoginButton from "./login-button";
import { useAuth } from "../context/auth-context";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <ul className="flex gap-2">
          <li>
            <Link to={"/"}>Posts</Link>
          </li>
          {user && (
            <li>
              <Link to={"/users"}>Users</Link>
            </li>
          )}
        </ul>
        <LoginButton />
      </div>
      <Outlet />
    </div>
  );
}
