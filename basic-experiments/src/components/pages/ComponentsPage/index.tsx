import { FC } from 'react';
import ToggleButton from '@components/basic/ToggleButton';
import RangeSlider from '@components/basic/RangeSlider';

export const ComponentsPage: FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Components</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row space-x-4">
          <ToggleButton />
        </div>
        <div className="flex flex-row space-x-4">
          <RangeSlider
            min={0}
            max={1000}
            step={1}
            value={500}
            onChange={(value: number): void =>
              console.log('Range slider value change', value)
            }
          />
        </div>
      </div>
    </>
  );
};
