import {ReactNode} from "react";

export type CardProps = {
  children: ReactNode;
  className?: string;
};

export type TitleProps = {
  children: string | ReactNode;
};

export type CallToActionProps = {
  children: string;
};

export type BodyProps = {
  children: ReactNode;
  className?: string;
};
