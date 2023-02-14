'use client';

import { categoriesData } from "../utils/data"
import Image from 'next/image'
import Link from 'next/link'
import GraphCMSImageLoader from "./ImgLoader"

export default function Categories() {
  return (
    <div className="content md:max-2xl:pt-2 md:max-2xl:pb-2">
      <h2 className="section-title">Categories</h2>
        <ul className="flex flex-wrap justify-start categories-list">
          {categoriesData.map((category) => (
            <li className="w-1/6">
              <Link className="hover-common-style flex flex-wrap items-center justify-center p-2" href={`/category/${category.permalink}`} key={ category.id}>
                <Image loader={GraphCMSImageLoader} src={category.image} alt={category.name} width={70} height={70}/>
                <p className="w-full text-center">{category.name}</p>
            </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}