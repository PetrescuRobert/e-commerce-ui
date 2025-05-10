import Hero from './Hero';
import BrandsBar from '@/pages/landing/BrandsBar.tsx';
import FeaturedProducts from '@/components/product/FeaturedProducts.tsx';

export default function LandingPage() {
  return (
      <>
        <Hero/>
        <BrandsBar/>
        <FeaturedProducts/>
      </>
  );
};