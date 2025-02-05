import React, { useState } from 'react';
import { RangeSliderProps } from '@components/basic/RangeSlider/types';

const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  onChange,
}) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setSliderValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        {sliderValue}
      </span>
    </div>
  );
};

export default RangeSlider;
