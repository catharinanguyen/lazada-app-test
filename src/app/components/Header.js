import { navLinks } from "../utils/data";
import Link from "next/link";
import './navbar.css'

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex justify-end">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link className="px-3 py-2 block nav-link" href={link.path}>
                  {link.name}
                </Link>
              </li>
            );
          })}
          </ul>
      </nav>
    </header>
  );
}