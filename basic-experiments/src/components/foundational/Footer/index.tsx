import { FC } from 'react';

type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-neutral-300 p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Pintail Consulting LLC. All Rights Reserved.</p>
    </footer>
  );
};
