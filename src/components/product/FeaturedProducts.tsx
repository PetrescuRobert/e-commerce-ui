import ProductCard from '@/components/product/ProductCard.tsx';
import {Button} from '@/components/ui/button.tsx';

export default function FeaturedProducts() {
  return <div className={'py-14 flex flex-col gap-10'}>
    <h1 className={'text-5xl text-center uppercase mb-4'}>Title</h1>
    <div
        className={'grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 place-items-center'}>
      {/*Product card*/}
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
    <div className={'flex justify-center w-full'}>
      <Button variant={'outline'}
              className={'rounded-full py-4 px-14 hover:cursor-pointer'}>View
        more</Button>
    </div>
  </div>;
};