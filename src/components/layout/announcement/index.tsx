import {X} from 'lucide-react';

export default function AnnouncementBar() {
  return (
      <div
          className={'w-full bg-black py-2 px-16 flex items-center justify-center'}>
        <p className={'text-center text-white text-sm grow'}>Sign up and get
          20%
          off to your first order.{' '}
          <span className={'font-semibold underline'}>Sign Up Now</span>
        </p>
        <X className={'text-white place-content-end'} size={20}/>
      </div>
  );
};