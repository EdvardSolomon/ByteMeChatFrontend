import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export const SearchComponent: React.FC = () => {
  return (
    <div className="relative">
      <input
        className="w-full bg-gray-800 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Поиск"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};
