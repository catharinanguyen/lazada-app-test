import { footerNavLinks } from "../utils/data";
import Link from "next/link";
import './footer.css'

export default function Footer() {
  return (
    <div className="md:flex pt-10 pb-10 footer-wrapper">
      <div className="md:w-1/4 footer-nav-content">
        <h2>CONTACT US</h2>
        <ul className="footer-nav-list">
          {footerNavLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link className="px-3 py-2 block" href={link.path}>
                  {link.name}
                </Link>
              </li>
            );
          })}
          </ul>
      </div>
      <div className="md:w-1/4 footer-nav-content">
        <h2>LAZADA VIETNAM</h2>
        <ul className="footer-nav-list">
          {footerNavLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link className="px-3 py-2 block" href={link.path}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="md:w-1/4 footer-nav-content">
        <h2>LAZADA VIETNAM</h2>
        <ul className="footer-nav-list">
          {footerNavLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link className="px-3 py-2 block" href={link.path}>
                  {link.name}
                </Link>
              </li>
            );
          })}
          </ul>
      </div>
      <div className="md:w-1/4 footer-nav-content">
        
      </div>
    </div>
  );
}