import React from 'react';
import { useDropzone } from 'react-dropzone';

function StyledDropzone() {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { 'image/*': [] } });

  const baseClasses =
    'flex flex-1 flex-col items-center p-5 border-2 border-dashed rounded-md bg-gray-50 text-gray-400 outline-none transition ease-in-out duration-200';
  const focusedClasses = 'border-blue-500';
  const acceptClasses = 'border-green-500';
  const rejectClasses = 'border-red-500';

  const classNames = [
    baseClasses,
    isFocused ? focusedClasses : '',
    isDragAccept ? acceptClasses : '',
    isDragReject ? rejectClasses : ''
  ].join(' ');

  return (
    <div className="container">
      <div {...getRootProps({ className: classNames })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
}

export default StyledDropzone;
