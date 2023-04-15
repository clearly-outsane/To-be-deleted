"use client";

import { useState } from "react";

const Upload = () => {
  const [isBeingDraggedOver, setIsBeingDraggedOver] = useState(false);

  const dropHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBeingDraggedOver(false);
    console.log(e.dataTransfer.files);
  };
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsBeingDraggedOver(true);
    } else if (e.type === "dragleave") {
      setIsBeingDraggedOver(false);
    }
  };
  const DraggedOverlay = () => {
    return (
      <div
        onDrop={dropHandler}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDragEnter={handleDrag}
        className='absolute inset-0 bg-pink-400 backdrop-filter backdrop-blur-sm flex justify-center items-center z-10'
      >
        <h1 className='text-2xl text-white'>Drop your files here</h1>
      </div>
    );
  };

  return (
    <div
      onDrop={dropHandler}
      onDragEnter={handleDrag}
      className='grid place-items-center w-screen h-screen overflow-hidden relative'
    >
      {isBeingDraggedOver && <DraggedOverlay />}

      <label className=" flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className='bg-[rgba(0,0,0,0.6)] backdrop-filter backdrop-blur-sm aspect-square w-[400px] rounded flex flex-col p-6 prose-invert prose'>
          <h1 className='font-normal text-white'>Upload</h1>
          <div
            className='cursor-pointer border-dashed border-2 border-white w-full h-[180px] flex justify-center items-center text-gray-400'
            style={{
              borderImage: `url('../public/images/dashed-border.png') 2 round`, //TODO
            }}
          >
            Drag and drop your files or click here
          </div>
        </div>
        <input className='hidden' type='file' />
      </label>
    </div>
  );
};

export default Upload;
