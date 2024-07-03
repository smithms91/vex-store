import { getProduct } from '@/lib/queries';
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
    <div>
      <h1>View page for: {product.title}</h1>
    </div>
  );
}

export default SingleProductPage