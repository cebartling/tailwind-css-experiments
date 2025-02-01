import { FC } from 'react';


export const Header: FC = () => {
  return (
    <header className="bg-primary text-black p-4 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Tailwind CSS 4.0 Experiments</h1>
      </div>
    </header>
  );
};
