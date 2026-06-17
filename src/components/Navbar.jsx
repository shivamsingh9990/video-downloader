import Login from "./Login";
import Signup from "./Signup";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow">
      <ul className="flex gap-6 ">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Features</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
      </ul>
      <div className="flex gap-4">
        <ThemeToggle />
        <Signup/>
        <Login/>
      

      </div>
    </nav>
  );
}
