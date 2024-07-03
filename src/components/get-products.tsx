import { getProducts } from '@/lib/queries';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { formatPrice } from '@/lib/utils';

type Props = {}

const GetProducts = async (props: Props) => {
  const json = await getProducts();
  console.log(json);
  return (
    <div>
      {json.data.products.nodes.map((product) => {
        const prodId = product.id?.split("/").pop();
        return (
          <li
            key={product.id}
            className="border border-slate-200 rounded-md overflow-hidden col-span-full md:col-span-6 lg:col-span-4"
          >
            <div>
              <Image
                src={product.featuredImage.url}
                alt={product.featuredImage.altText}
                width={product.featuredImage.width}
                height={product.featuredImage.height}
                className="h-96 w-full object-cover"
                placeholder="blur"
                blurDataURL={product.featuredImage.url}
              />
            </div>

            <div className="p-5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-yellow-400 font-bold py-1 px-3 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}

              <h3 className="font-medium mt-3 text-3xl">{product.title}</h3>

              <h4>
                {formatPrice(product.priceRangeV2.minVariantPrice.amount)}{" "}
                {product.priceRangeV2.minVariantPrice.currencyCode}
              </h4>

              <p className="mt-2 mb-4">{product.description}</p>

              <Link
                href={`/products/${prodId}`}
                className="border border-blue-600 inline-block p-2 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white ease-in-out duration-150"
              >
                View Product
              </Link>
            </div>
          </li>
        );
      })}
    </div>
  )
}

export default GetProducts