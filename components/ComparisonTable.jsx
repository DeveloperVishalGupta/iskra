'use client';

import { musicDistributors, musicFeatures } from '../constant';

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-600">
      <table className="min-w-full table-auto text-sm text-white">
        <thead className="bg-blue-700 text-xs uppercase text-white">
          <tr>
            <th className="bg-[#2c2c2c] px-4 py-3 text-left" />
            {musicDistributors.map((brand) => (
              <th key={brand} className="px-4 py-3 text-center">
                {brand}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-[#1c1c1c] text-sm">
          {musicFeatures.map((feature) => (
            <tr key={feature.title} className="border-b border-gray-600">
              <td className="px-4 py-3 font-medium text-white">
                {feature.title}
              </td>
              {feature.values.map((value, idx) => (
                <td
                  key={idx}
                  className={`px-4 py-3 text-center ${
                    value === '✔'
                      ? 'text-green-400'
                      : value === '❌'
                        ? 'text-red-500'
                        : 'text-white'
                  }`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
