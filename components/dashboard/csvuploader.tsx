'use client';

import React, { useState } from 'react';

import Papa from 'papaparse';

const CSVUploader = () => {
  const [csvData, setCSVData] = useState([]);
  const [error, setError] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csv = e.target.result;
      parseCSV(csv);
    };

    reader.onerror = (e) => {
      setError('Error reading file');
    };

    reader.readAsText(file);
  };

  const parseCSV = (csv) => {
    Papa.parse(csv, {
      header: true,
      complete: (result) => {
        setCSVData(result.data);
      },
      error: (error) => {
        setError('Error parsing CSV');
      },
    });
  };

  return (
    <div className='mt-4'>
      <input type='file' accept='.csv' onChange={handleFileUpload} />
      {error && <div className='text-red-500 mt-2'>{error}</div>}
      {csvData.length > 0 && (
        <table className='mt-4 w-full'>
          <thead>
            <tr>
              {Object.keys(csvData[0]).map((column, index) => (
                <th
                  key={index}
                  className='bg-gray-200 text-gray-800 py-2 px-4 font-semibold'
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                {Object.values(row).map((value, index) => (
                  <td key={index} className='py-2 px-4'>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CSVUploader;
