import Hero from './Hero';
import BrandsBar from '@/pages/landing/BrandsBar.tsx';
import FeaturedProducts from '@/components/product/FeaturedProducts.tsx';
import {Separator} from '@/components/ui/separator.tsx';

export default function LandingPage() {
  return (
      <div>
        <Hero/>
        <BrandsBar/>
        <div className={'px-32'}>
          <FeaturedProducts/>
          <Separator/>
          <FeaturedProducts/>

          <div className={'bg-[#F0F0F0] h-96 rounded-4xl'}>

          </div>

        </div>
      </div>
  );
};