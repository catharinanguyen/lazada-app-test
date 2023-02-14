import Image from 'next/image'
import { Inter } from '@next/font/google'
import { productsData, categoriesData } from "./utils/data";
import Link from 'next/link'
import banner from './assets/banner.png'
import footerBanner from './assets/footer_banner.png'

import Header from './components/Header'
import Search from './components/Search'
import ProductList from './components/ProductList';
import './custom.css'
import Footer from './components/Footer';
import Carrousel from './components/Carrousel';
import Categories from './components/Categories';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="wrapper">
      <Link className="header-banner block w-full" href="#">
        <Image
          className="w-full"
          src={banner}
          alt="Banner of new feature"
        />
      </Link>
      <Header/>
      <Search/>
      <Carrousel />
      <ul className="category flex justify-between pt-5 pb-5">
        <li className="w-1/4 p-2">
          <Link className="category-link hover-common-style is-mall flex items-center md:pl-10" href="#">LazMall</Link>
        </li>
        <li className="w-1/4 p-2">
          <Link className="category-link hover-common-style is-voucher flex items-center md:pl-10" href="#">Voucher</Link>
        </li>
        <li className="w-1/4 p-2">
          <Link className="category-link hover-common-style is-topup flex items-center md:pl-10" href="#">Top Up & eCoupon</Link>
        </li>
        <li className="w-1/4 p-2">
          <Link className="category-link hover-common-style is-lazglobal flex items-center md:pl-10" href="#">LazGlobal</Link>
        </li>
      </ul>
      <div className="content md:max-2xl:pt-2 md:max-2xl:pb-2">
        <h2 className="section-title">Flash sale</h2>
          <ProductList products={productsData}/>
      </div>
      <Categories />
      <div className="content md:max-2xl:pt-2 md:max-2xl:pb-2">
        <h2 className="section-title">Just for you</h2>
          <ProductList products={productsData}/>
      </div>
      <div className='footer-banner'>
        <ul className="flex">
          <li className="md:max-2xl:w-1/3 pr-1 pl-1">
            <Link href="#">
              <Image className='w-full' src={footerBanner} alt="Voucher" />
            </Link>
          </li>
          <li className="md:w-1/3 pr-1 pl-1">
            <Link href="#">
              <Image className='w-full' src={footerBanner} alt="Voucher" />
            </Link>
          </li>
          <li className="md:w-1/3 pr-2 pl-2">
            <Link href="#">
              <Image className='w-full' src={footerBanner} alt="Voucher" />
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
