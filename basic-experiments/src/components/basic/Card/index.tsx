import { FC } from 'react';
import {
  BodyProps,
  CallToActionProps,
  CardProps,
  TitleProps,
} from '@components/basic/Card/types';

const Title: FC<TitleProps> = ({ children }: TitleProps) => {
  return <h3 className="text-xl font-semibold">{children}</h3>;
};

const CallToAction: FC<CallToActionProps> = ({
  children,
}: CallToActionProps) => {
  return (
    <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
      {children}
    </button>
  );
};

const Body: FC<BodyProps> = ({ children }: BodyProps) => {
  return <div className="mt-4">{children}</div>;
};

const Card: FC<CardProps> & {
  Title: typeof Title;
  CallToAction: typeof CallToAction;
  Body: typeof Body;
} = ({ children }: CardProps) => {
  return (
    <div className="border border-gray-300 rounded-2xl shadow-xl p-6 w-80 text-center">
      {children}
    </div>
  );
};
Card.Title = Title;
Card.CallToAction = CallToAction;
Card.Body = Body;

export { Card };
