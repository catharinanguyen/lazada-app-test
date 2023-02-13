import Image from 'next/image';
import Link from 'next/link'
import './search.css';
import headerBanner from '../assets/header-banner.png'
import logo from '../assets/logo.png'

export default function Search() {
  return (
    <div className="md:flex justify-between md:pt-4 md:pb-4 search-wrapper">
      <Link href="#" className="block w-32 mr-2 logo">
        <Image src={logo} alt="Lazada"/>
      </Link>
      <form className="search-input md:w-2/5 relative" action="/api/form" method="post">
        <input type="text" id="search" name="Search in Lazada" />
        <button type="submit" className="absolute top-0">
        </button>
      </form>
      <div className="lzd-cart">
        <Link className='d-block' href="#">
          <span className="cart-icon"></span>
          <span className="cart-number"></span>
        </Link>
      </div>
      <div className="lzd-header-banner">
        <Link className='d-block' href="#">
          <Image src={headerBanner} alt="Header Banner"/>
        </Link>
      </div>
    </div>
  )
} 