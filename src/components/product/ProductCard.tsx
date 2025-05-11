import product from '@/assets/product-1.png';
import {Link} from '@tanstack/react-router';
import AverageRating from '@/components/product/rating';

export default function ProductCard() {
  return (
      <div className={'flex flex-col text-wrap w-full max-w-72'}>
        <div className={'rounded-3xl overflow-hidden'}>
          {/*img*/}
          <img src={product} alt={'product'}/>
        </div>
        <div className={'flex flex-col py-4'}>
          {/*info*/}
          <Link to={'.'} className={'text-xl font-bold'}>T-SHIRT WITH
            TAPE
            DETAILS</Link>
          <AverageRating avgRating={4}/>
          <p className={'font-bold text-2xl'}>$120</p>
        </div>
      </div>
  );
};