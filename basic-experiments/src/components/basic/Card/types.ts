import {ReactNode} from "react";

export type CardProps = {
  children: ReactNode;
};

export type TitleProps = {
  children: string | ReactNode;
};

export type CallToActionProps = {
  children: string;
};

export type BodyProps = {
  children: ReactNode;
};
