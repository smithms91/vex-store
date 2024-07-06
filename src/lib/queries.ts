'use server';

import { gql } from '@/lib/utils';
import { GraphQLResponse, GraphQLSingleResponse } from './types';

export const getProducts = async (): Promise<GraphQLResponse> => {
  try {
    const res = await fetch(process.env.GRAPHQL_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY!
      },
      body: JSON.stringify({
        query: gql`
          query ProductsQuery {
            products(first: 1) {
              nodes {
                id
                description
                featuredImage {
                  altText
                  height
                  id
                  url
                  width
                }
                handle
                priceRangeV2 {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                tags
                title
              }
            }
          }
        `,
      }),
    });

    const json = await res.json();
    return json; // Ensure this matches the GraphQLResponse type
  } catch (error) {
    // Handle or log the error as needed
    console.error("Failed to fetch products:", error);
    // Return a default value or rethrow the error
    throw error; // or return a default value that matches GraphQLResponse type
  }
};

export const getProduct = async (id: string): Promise<GraphQLSingleResponse> => {
  const res = await fetch(process.env.GRAPHQL_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY!
    },
    body: JSON.stringify({
      query: gql`
        query SingleProductQuery($id: ID!) {
          product(id: $id) {
            description
            featuredImage {
              altText
              height
              id
              url
              width
            }
            id
            priceRangeV2 {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            tags
            title
          }
        }
      `,
      variables: {
        id: `gid://shopify/Product/${id}`
      }
    })
  });

  if (!res.ok) {
    const text = await res.text(); // get the response body for more information

    throw new Error(`
      Failed to fetch data
      Status: ${res.status}
      Response: ${text}
    `);
  }

  return res.json();
};