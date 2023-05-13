
'use client';
const handleDownload = async () => {
  try {
    const response = await fetch('/floorplan.png');
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'image.jpg';
    link.click();
  } catch (error) {
    console.error('Error downloading the image:', error);
  }
};
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>


export const DownloadButton = () => <label onClick={() => handleDownload()} className='h-fit flex items-center gap-1 justify-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white'>
  <DownloadIcon />
<span className='text-base leading-normal' >Download</span>
</label>