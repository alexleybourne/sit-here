'use client';

import { useEffect, useState } from 'react';

import Conditions from './Conditions';
import GenerateAnimation from './GenerateAnimation';
import Papa from 'papaparse';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [animate, setAnimate] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem('csvFiles') || '[]');
    setFiles(storedFiles);
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (results) => {
        const newFile = { name: file.name, data: results.data };
        setFiles((prevFiles) => [...prevFiles, newFile]);
        localStorage.setItem('csvFiles', JSON.stringify([...files, newFile]));
      },
    });
  };

  const handleFloorPlanUpload = () => {
    console.log('handleFloorPlanUpload');
  };

  const handleRemoveFile = (fileName) => {
    if (selectedFile && fileName === selectedFile.name) setSelectedFile(null);
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    localStorage.setItem(
      'csvFiles',
      JSON.stringify(files.filter((file) => file.name !== fileName))
    );
  };

  const handleGeneration = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      router.push('/plan');
    }, 3000);
  };

  return (
    <div className='flex mh-screen w-full'>
      <div className='z-10 fixed h-screen flex flex-col items-center w-1/5 bg-blue-100 py-4 border-r-2 border-blue-700'>
        <label className='w-64 flex items-center justify-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white'>
          <svg
            className='w-8 h-8 mr-2'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
          </svg>
          <span className='text-base leading-normal'>Upload CSV</span>
          <input onChange={handleFileUpload} type='file' className='hidden' />
        </label>
        <ul className='mt-4'>
          {files.map((file) => (
            <li
              key={file.name}
              className='outline outline-blue-700 rounded flex px-1 mb-4 justify-between items-center'
            >
              <button
                className='text-left text-gray-700 font-bold'
                onClick={() => setSelectedFile(file)}
              >
                {file.name}
              </button>
              <button
                onClick={() => handleRemoveFile(file.name)}
                className=' text-gray pl-2 rounded'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6 hover:fill-red-500'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
        <div className='my-3' />
        <label className='w-64 flex items-center justify-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white'>
          <svg
            className='w-8 h-8 mr-2'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
          </svg>
          <span className='text-base leading-normal'>Upload Floor Plan</span>
          <input
            onChange={handleFloorPlanUpload}
            type='file'
            className='hidden'
          />
        </label>
        <ul className='mt-4'>
          <li
            key={1}
            className='outline outline-blue-700 rounded flex px-1 mb-4 justify-between items-center'
          >
            <button className='text-left text-gray-700 font-bold'>
              business-corp.png
            </button>
            <button className=' text-gray pl-2 rounded'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6 hover:fill-red-500'
              >
                <path
                  fillRule='evenodd'
                  d='M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div className='w-1/5'>{/* Spacer for behind side bar */}</div>
      <div className='w-3/4 p-4'>
        {selectedFile && (
          <div className='flex flex-row justify-between m-4'>
            <div>
              <h1 className='text-2xl font-bold mb-4'>Rule Configuration</h1>
              <Conditions selectedFile={selectedFile} />
            </div>
          </div>
        )}

        {selectedFile && (
          <div className='flex flex-row justify-between m-4'>
            <label
              onClick={handleGeneration}
              className='h-fit flex items-center gap-1 justify-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z'
                  clipRule='evenodd'
                />
              </svg>

              <span className='text-base leading-normal'>
                GENERATE FLOORPLAN
              </span>
            </label>
          </div>
        )}

        {!selectedFile && (
          <div className='flex flex-col items-center justify-center h-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-20 h-20'
            >
              <path
                fillRule='evenodd'
                d='M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z'
                clipRule='evenodd'
              />
              <path d='M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z' />
            </svg>

            <h1 className='text-2xl font-bold mb-4'>Upload and Select a CSV</h1>
          </div>
        )}

        {selectedFile && <div className='split-line' />}
        <div className='m-4'>
          {selectedFile && (
            <>
              <h2 className='text-xl font-bold mb-2 text-blue-700'>
                {selectedFile.name}
              </h2>
              <table className='w-full border-collapse'>
                <tbody>
                  {selectedFile.data.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={rowIndex === 0 ? 'font-bold bg-blue-50' : ''}
                    >
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className='border px-2 py-1 text-m'>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>

      {animate && <GenerateAnimation />}
    </div>
  );
}
