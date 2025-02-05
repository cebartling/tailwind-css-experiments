import { FC } from 'react';
import ToggleButton from '@components/basic/ToggleButton';

export const ComponentsPage: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Components</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row space-x-4">
          <ToggleButton />
        </div>
      </div>
    </>
  );
};
