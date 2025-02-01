import { FC } from 'react';

type SpacerProps = {
  height: number;
};

/**
 * Spacer component to add space between elements
 *
 * @param height A number representing the height of the spacer in units of 4 pixels. For example, a height of 4 will render a spacer with a height of 16 pixels.
 */
export const Spacer: FC<SpacerProps> = ({ height }: SpacerProps) => {
  return <div className={`h-${height}`}></div>;
};
