import { Footer } from '../../foundational/Footer';
import { Main } from '../../foundational/Main';
import { Spacer } from '../../foundational/Spacer';
import { Header } from '../../foundational/Header';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const DefaultLayout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Header />
      <Spacer height={16} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};
