import { Footer } from '@components/foundational/Footer';
import { Main } from '@components/foundational/Main';
import { Spacer } from '@components/foundational/Spacer';
import { Header } from '@components/foundational/Header';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@components/basic/Sidebar';

export const DefaultLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Header />
      <Sidebar />
      <Spacer />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};
