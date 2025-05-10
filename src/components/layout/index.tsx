import Header from '@/components/layout/Header.tsx';
import Footer from '@/components/layout/Footer.tsx';
import {PropsWithChildren} from 'react';

export default function Layout({children}: PropsWithChildren) {
  return <div>
    <Header/>
    {children}
    <Footer/>
  </div>;
};