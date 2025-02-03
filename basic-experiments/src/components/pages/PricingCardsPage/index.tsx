import { FC } from 'react';
import { Card } from '@components/basic/Card';

const testData = [
  {
    title: 'Basic',
    price: 9,
    projects: '10 projects',
    storage: '5 GB storage',
    support: 'Basic support',
    subtitle: 'For individuals getting started',
  },
  {
    title: 'Pro',
    price: 29,
    projects: '50 projects',
    storage: '50 GB storage',
    support: 'Priority support',
    subtitle: 'For growing businesses',
  },
  {
    title: 'Enterprise',
    price: 99,
    projects: 'Unlimited projects',
    storage: '1 TB storage',
    support: '24/7 support',
    subtitle: 'For large teams',
  },
];

export const PricingCardsPage: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Pricing Cards</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8">
        {testData.map((dataItem) => {
          return (
            <Card>
              <Card.Title>{dataItem.title}</Card.Title>
              <Card.Body>
                <p className="text-gray-500 mt-2">{dataItem.subtitle}</p>
                <p className="text-3xl font-bold mt-4">
                  ${dataItem.price}
                  <span className="text-lg">/mo</span>
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>✔ {dataItem.projects}</li>
                  <li>✔ {dataItem.storage}</li>
                  <li>✔ {dataItem.support}</li>
                </ul>
              </Card.Body>
              <Card.CallToAction>Select Plan</Card.CallToAction>
            </Card>
          );
        })}
      </div>
    </>
  );
};
