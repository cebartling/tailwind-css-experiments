import { FC, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = [
  { to: '/components', label: 'Components' },
  { to: '/pricing-cards', label: 'Pricing Cards' },
];

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {/* Toggle Button */}
      <button
        className="p-2 rounded-md bg-gray-800 text-white fixed top-[10px] left-4 z-50"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-neutral-700 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform z-50 p-4 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close Button */}
        <button
          className="p-2 rounded-md text-gray-800 mb-4"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Navigation Links */}
        <nav className="space-y-4">
          {data.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block p-2 text-gray-800 hover:bg-gray-200 rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export { Sidebar };
