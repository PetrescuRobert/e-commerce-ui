import logo from '@/assets/logo.png';
import {CircleUser, ShoppingCart} from 'lucide-react';
import Menu from '@/components/layout/menu';
import SearchProduct from '@/components/layout/search-product';

export default function Navbar() {
  return (
      <nav className={'flex justify-between items-center px-16 py-4'}>
        <img src={logo} alt={'Logo'} width={162} height={22}/>
        <Menu/>
        <SearchProduct/>
        <div className={'flex gap-3'}>
          <ShoppingCart/>
          <CircleUser/>
        </div>
      </nav>
  );
};