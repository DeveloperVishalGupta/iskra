import React from 'react';

function UnderDev({ section }) {
  return (
    <div className=" w-full  text-gray-800 py-4">
      <div className=" mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <svg
          className="mx-auto h-16 w-16 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
          ></path>
        </svg>
        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          We're Working on This{' '}
        </h2>
        <p className="mt-4 w-3/5 mx-auto text-gray-600">
          {` This ${section} is currently under development. Please check
                  back soon for updates. Thank you for your patience!`}
        </p>
      </div>
    </div>
  );
}

export default UnderDev;
