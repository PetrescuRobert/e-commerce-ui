import Navbar from '@/components/layout/navbar';
import AnnouncementBar from '@/components/layout/announcement';

export default function Header() {
  return (
      <div className={'w-full'}>
        <AnnouncementBar/>
        <Navbar/>
      </div>
  );
};