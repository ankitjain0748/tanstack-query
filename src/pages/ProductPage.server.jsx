// app/pages/ProductPage.server.jsx
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchProduct } from '../api/api';
import ProductPage from './ProductPage';

export default async function ProductPageServer({ id }) {
  const queryClient = new QueryClient();
  const product = await fetchProduct(id);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductPage product={product} />
    </HydrationBoundary>
  );
}
