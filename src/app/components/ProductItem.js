'use client';

import Image from 'next/image';
import GraphCMSImageLoader from './ImgLoader';

const ProductItem = ({ product }) => {

  let vnd = Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'VND',
  });

  return (
    <div className="product">
      <div className="product-img-wrapper">
        <div className="flex justify-center items-center">
          <Image
            loader={GraphCMSImageLoader}
            alt={product.name}
            className="img-responsive product-img"
            src={product.image}
            width="300"
            height="300"
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
        {`${vnd.format(product.price)}`}
      </div>
      <div className="pull-right h4 product-price-origin">
        <s>{`${vnd.format(product.originPrice)}`}</s>
      </div>
    </div>
  );
}

export default ProductItem;