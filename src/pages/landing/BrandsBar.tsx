import versace from '@/assets/versace.png';
import zara from '@/assets/zara.png';
import gucci from '@/assets/gucci.png';
import prada from '@/assets/prada.png';
import ck from '@/assets/ck.png';

export default function BrandsBar() {
  return <div className={'bg-black w-full flex justify-between px-32 py-8'}>
    <img src={versace} alt={'versace logo'} height={34}/>
    <img src={zara} alt={'zara logo'} height={34}/>
    <img src={gucci} alt={'gucci logo'} height={34}/>
    <img src={prada} alt={'prada logo'} height={34}/>
    <img src={ck} alt={'ck logo'} height={34}/>
  </div>;
}