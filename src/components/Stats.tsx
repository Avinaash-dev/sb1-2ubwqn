import React from 'react';

export function Stats() {
  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Projects Completed', value: '4' },
    { label: 'Satisfied Clients', value: '3' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      {stats.map(({ label, value }) => (
        <div key={label} className="text-center p-4 bg-purple-900/20 rounded-lg backdrop-blur-sm">
          <div className="text-3xl font-bold text-purple-400">{value}</div>
          <div className="text-sm text-gray-300">{label}</div>
        </div>
      ))}
    </div>
  );
}