import { FC, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export const Card: FC<CardProps> = ({ children }: CardProps) => {
  return (
    <div className="border rounded-2xl shadow-lg p-6 w-80 text-center">
      {children}
    </div>
  );
};
