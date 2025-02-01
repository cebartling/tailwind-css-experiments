import { FC, ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};

export const Main: FC<MainProps> = ({ children }: MainProps) => {
  return (
    <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto flex flex-col justify-between items-start">
            {children}
        </div>
      </main>
  );
};
