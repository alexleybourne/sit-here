'use client';

import { useEffect, useState } from 'react';

import Papa from 'papaparse';
import Conditions from './Conditions';
import GenerateAnimation from './GenerateAnimation';
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
    console.log('handleFloorPlanUpload')
  }

  const handleRemoveFile = (fileName) => {
    if (selectedFile && fileName === selectedFile.name) setSelectedFile(null);
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
    localStorage.setItem(
      'csvFiles',
      JSON.stringify(files.filter((file) => file.name !== fileName))
    );
  };

  const handleGeneration = () => {
    setAnimate(true)
    setTimeout(() => { 
      setAnimate(false)
      router.push("/plan")
    }, 3000)

  }

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
        <div className="my-3" />
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
          <input onChange={handleFloorPlanUpload} type='file' className='hidden' />
        </label>
      </div>
      <div className='w-1/5'>{/* Spacer for behind side bar */}</div>
      <div className='w-3/4 p-4'>
        <div className='flex flex-row justify-between'>
          <div>
            <h1 className='text-2xl font-bold mb-4'>Rule Configuration</h1>
            <Conditions selectedFile={selectedFile} />
          </div>
          <label onClick={handleGeneration} className='h-fit flex items-center gap-1 justify-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span className='text-base leading-normal'>GENRATE SEATING</span>
          </label>
        </div>

        <div className="mb-3" />
        <div className='split-line' />
        <div className=''>
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
