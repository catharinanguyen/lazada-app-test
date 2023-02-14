import Link from 'next/link';
import ProductItem from './ProductItem';
import './product.css'

const ProductListing = ({ products }) => (
  <ul className="flex flex-wrap justify-start product-list" id="products">
    {products.map((product) => (
      <li className="max-[767px]:1/2 md:w-1/5">
        <Link className="block pl-4 pr-4 pb-4 hover-common-style" href={`/product/${product.permalink}`} key={product.id}>
          <ProductItem
            product={product}
          />
      </Link>
      </li>
    ))}
  </ul>
);

export default ProductListing;