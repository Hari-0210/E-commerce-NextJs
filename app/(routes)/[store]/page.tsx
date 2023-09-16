import getProduct from '@/actions/get-product';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import React from 'react';

interface StorePageProps {
  params: any; 
}
export const revalidate = 0;

const StorePage: React.FC<StorePageProps> = async ({ params }) => {
  const product = await getProduct(params.store);
  
  if (!product) {
    return null;
  }
  return (
    <div className="bg-white">
      <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList storeName={params.store} title="Featured Products" items={product} />
        </div>
      </div>
      </Container>
    </div>
  );
};

export default StorePage;
