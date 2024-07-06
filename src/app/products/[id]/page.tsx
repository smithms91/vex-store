import { getProduct } from '@/lib/queries';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

type SingleProductPageProps = {
  params: {
    id: string;
  };
};

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const json = await getProduct(params.id);
  const { product } = json.data

  return (
    <div className="container mx-auto md:pb-10">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:basis-1/2">
          <Image
            src={product?.featuredImage?.url}
            alt={product?.featuredImage?.altText}
            width={product?.featuredImage?.width}
            height={product?.featuredImage?.height}
            placeholder="blur"
            blurDataURL={product?.featuredImage?.url}
          />
        </div>

        <div className="p-5 md:basis-1/2">
          {product.tags.map((tag) => (
            <span key={tag} className="bg-yellow-400 font-bold py-1 px-3 rounded-full text-xs">
              {tag}
            </span>
          ))}

          <h3 className="font-medium mt-3 text-3xl">{product.title}</h3>

          <h4>
            {formatPrice(product.priceRangeV2.minVariantPrice.amount)}{" "}
            {product.priceRangeV2.minVariantPrice.currencyCode}
          </h4>

          <p className="mt-2 mb-4">{product.description}</p>

          <button
            className="border border-blue-600 inline-block p-2 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white ease-in-out duration-150"
            type="button"
          >
            Add to Cart
          </button>
          <span className="block mt-1 text-xs">* Note: this won&apos;t actually do anything</span>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage