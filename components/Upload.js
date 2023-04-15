"use client";

import { useState } from "react";
import clsxm from "../utils/clsxm";
import Header from "./Header";

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
        className={clsxm(
          `absolute transition inset-0 bg-cover bg-center bg-no-repeat bg-[url("https://media.giphy.com/media/3gXYfOUVcaJ8tSVCIJ/giphy.gif")] backdrop-filter backdrop-blur-sm flex justify-center items-center z-10`,
          "before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-60  z-20"
        )}
      >
        <h1 className='text-2xl text-white pointer-events-none z-30'>
          Drop your files here
        </h1>
      </div>
    );
  };

  return (
    <div
      onDrop={dropHandler}
      onDragEnter={handleDrag}
      className={clsxm(
        "grid place-items-center w-screen h-screen overflow-hidden relative ",
        `bg-cover bg-center bg-no-repeat bg-[url("https://media.giphy.com/media/3o6vXRpbptjHM70EzS/giphy.gif")]`,
        "before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-90"
      )}
    >
      <Header />
      {isBeingDraggedOver && <DraggedOverlay />}

      <div className='prose-invert prose flex flex-col text-center items-center z-10'>
        <h1 className='font-medium text-white max-w-[560px] text-[40px] m-0'>
          Generate the perfect discord anime profile picture
        </h1>
        <label>
          <div className='border border-gray-600 rounded-full py-2 px-5 mt-4 cursor-pointer active:scale-[.98] transition duration-200'>
            <h4 className='text-gray-400 font-normal m-0'>
              Drag and drop a file or click here to upload
            </h4>
          </div>
          <input className='hidden' type='file' />
        </label>
      </div>
    </div>
  );
};

export default Upload;
