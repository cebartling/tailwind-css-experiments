import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { WelcomePage } from './components/pages/WelcomePage';
import { PricingCardsPage } from './components/pages/PricingCardsPage';

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/pricing-cards" element={<PricingCardsPage />} />
      <Route path="/" element={<WelcomePage />} />
    </Routes>
  );
};
