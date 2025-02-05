import { createBrowserRouter } from 'react-router-dom';
import { WelcomePage } from '@components/pages/WelcomePage';
import { PricingCardsPage } from '@components/pages/PricingCardsPage';
import { DefaultLayout } from '@components/layouts/DefaultLayout';
import { ComponentsPage } from '@components/pages/ComponentsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />, // Parent component
    children: [
      { index: true, element: <WelcomePage /> },
      { path: 'pricing-cards', element: <PricingCardsPage /> },
      { path: 'components', element: <ComponentsPage /> },
    ],
  },
]);
