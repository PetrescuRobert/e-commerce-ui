import './style.css';
import manAndGirl from '@/assets/hero-icon.svg';
import {Link} from '@tanstack/react-router';
import {Button} from '@/components/ui/button.tsx';
import {Separator} from '@/components/ui/separator.tsx';

export default function Hero() {
  return (
      <div className={'grid grid-cols-2 bg-[#F2F0F1] h-[1024px] px-32'}>
        <div className={'place-content-center flex flex-col gap-8'}>
          <h1 className={'text-7xl font-bold'}>FIND CLOTHES THAT MATCHES
            YOUR STYLE</h1>
          <p>Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.</p>
          <Link to={'/shop'}>
            <Button variant={'default'}
                    className={'rounded-full hover:cursor-pointer px-14 py-6'}>
              Shop Now
            </Button>
          </Link>

          <div className={'flex w-full gap-4 mt-8'}>
            <div>
              <p className={'font-semibold text-5xl'}>200+</p>
              <p className={'text-muted-foreground'}>International
                Brands</p>
            </div>
            <Separator orientation={'vertical'}/>
            <div>
              <p className={'font-semibold text-5xl'}>2,000+</p>
              <p className={'text-muted-foreground'}>High-Quality Products</p>
            </div>
            <Separator orientation={'vertical'}/>
            <div>
              <p className={'font-semibold text-5xl'}>30,000+</p>
              <p className={'text-muted-foreground'}>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className={'place-content-center items-center'}>
          <img src={manAndGirl} alt={'man and girl'} className={'w-full'}/>
        </div>

      </div>
  );
};
