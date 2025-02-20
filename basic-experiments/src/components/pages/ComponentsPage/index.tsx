import { FC } from 'react';
import { Option } from '@components/basic/TypeAheadSelect/types';
import ToggleButton from '@components/basic/ToggleButton';
import RangeSlider from '@components/basic/RangeSlider';
import Skeleton from '@components/basic/Skeleton';
import TypeAheadSelect from '@components/basic/TypeAheadSelect';
import TypeAheadAddress from '@components/basic/TypeAheadAddress';
import { defaultAddressAPI } from '@components/basic/TypeAheadAddress/services.ts';

const options: Option[] = [
  { value: 'onions', label: 'Onions' },
  { value: 'broccoli', label: 'Broccoli' },
  { value: 'carrots', label: 'Carrots' },
  { value: 'green beans', label: 'Green Beans' },
  { value: 'asparagus', label: 'Asparagus' },
];

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
        <div className="flex flex-row space-x-4">
          <Skeleton width={800} height={600} />
        </div>
        <div className="flex flex-row space-x-4">
          <TypeAheadSelect
            onSelect={(option: Option): void =>
              console.log('Option selected', option)
            }
            options={options}
          />
        </div>
        <div className="flex flex-row space-x-4">
          <TypeAheadAddress addressAPI={defaultAddressAPI} />
        </div>
      </div>
    </>
  );
};
