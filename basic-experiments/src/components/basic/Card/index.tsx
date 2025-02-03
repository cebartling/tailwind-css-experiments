import { FC, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

type TitleProps = {
  children: string | ReactNode;
};

type CallToActionProps = {
  children: string;
};

type BodyProps = {
  children: ReactNode;
};

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
    <div className="border rounded-2xl shadow-lg p-6 w-80 text-center">
      {children}
    </div>
  );
};
Card.Title = Title;
Card.CallToAction = CallToAction;
Card.Body = Body;

export { Card };
