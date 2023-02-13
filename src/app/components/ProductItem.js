import Image from 'next/image';
import Link from 'next/link';

const ProductItem = ({ product }) => {
  return (
    <div className="product">
      <div className="product-img-wrapper">
        <div>
          <Image
            alt={product.name}
            className="img-responsive product-img"
            src={product.images["loaderFile"]}
            width="200"
            height="200" 
            />
        </div>
      </div>

      <h4
        className="ellipsis"
        title={product.name}>
        <div className="product-name">
          {product.name}
        </div>
      </h4>
      <div className="pull-right h4 product-price">
        {`đ${product.price}`}
      </div>
      <div className="pull-right h4 product-price-origin">
        <s>{`đ${product.originPrice}`}</s>
      </div>
    </div>
  );
}

export default ProductItem;