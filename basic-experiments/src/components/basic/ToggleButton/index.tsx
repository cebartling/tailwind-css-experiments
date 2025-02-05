import { FC, useState } from 'react';

const ToggleButton: FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`relative w-14 h-8 rounded-full p-1 transition-colors ${
        isOn ? 'bg-blue-500' : 'bg-gray-300'
      }`}
      role="switch"
      aria-checked={isOn}
    >
      <span
        className={`block w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
          isOn ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

export default ToggleButton;
