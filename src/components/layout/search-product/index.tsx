import {Input} from '@/components/ui/input.tsx';
import {Search} from 'lucide-react';

export default function SearchProduct() {
  return (
      <div
          className={'w-1/2 flex items-center bg-zinc-100 rounded-full overflow-hidden px-2'}>
        <div className={''}>
          <Search className={'text-zinc-400'} size={24}/>
        </div>
        <Input
            className={' bg-zinc-100 h-12 border-0 focus-visible:ring-0 shadow-none'}
            placeholder={'Search for products...'}/>
      </div>
  );
};