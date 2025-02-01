import { FC } from 'react';

export const PricingCardsPage: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Pricing Cards</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8">

        {/* Basic Plan */}
        <div className="border rounded-2xl shadow-lg p-6 w-80 text-center">
          <h3 className="text-xl font-semibold">Basic</h3>
          <p className="text-gray-500 mt-2">For individuals getting started</p>
          <p className="text-3xl font-bold mt-4">
            $9<span className="text-lg">/mo</span>
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✔ 10 Projects</li>
            <li>✔ 5GB Storage</li>
            <li>✔ Basic Support</li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Select Plan
          </button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-2xl shadow-lg p-6 w-80 text-center bg-gray-100">
          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="text-gray-500 mt-2">For growing businesses</p>
          <p className="text-3xl font-bold mt-4">
            $29<span className="text-lg">/mo</span>
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✔ 50 Projects</li>
            <li>✔ 50GB Storage</li>
            <li>✔ Priority Support</li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Select Plan
          </button>
        </div>
        {/* Enterprise Plan */}
        <div className="border rounded-2xl shadow-lg p-6 w-80 text-center">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="text-gray-500 mt-2">For large teams</p>
          <p className="text-3xl font-bold mt-4">
            $99<span className="text-lg">/mo</span>
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✔ Unlimited Projects</li>
            <li>✔ 1TB Storage</li>
            <li>✔ 24/7 Support</li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Select Plan
          </button>
        </div>
      </div>

      <p className="mt-2 text-lg">This page demonstrates pricing cards.</p>
    </>
  );
};
