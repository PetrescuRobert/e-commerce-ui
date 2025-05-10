import product from '@/assets/product-1.png';
import {Link} from '@tanstack/react-router';
import AverageRating from '@/components/product/rating';

export default function FeaturedProducts() {
  return <div>
    <h1 className={'text-5xl text-center'}>Title</h1>
    <div className={'flex items-center justify-center'}>
      {/*Product card*/}
      <div className={'flex flex-col text-wrap'}>
        <div className={'rounded-3xl overflow-hidden'}>
          {/*img*/}
          <img src={product} alt={'product'}/>
        </div>
        <div className={'flex flex-col py-4'}>
          {/*info*/}
          <Link to={'.'} className={'text-2xl font-bold'}>T-SHIRT WITH
            TAPE
            DETAILS</Link>
          <AverageRating avgRating={4}/>
          <p className={'font-bold text-2xl'}>$120</p>
        </div>
      </div>
    </div>
  </div>;
};